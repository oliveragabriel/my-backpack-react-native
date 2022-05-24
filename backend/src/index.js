import {LoginUserService, PostUserService} from './service/UserService';
import Authentication from './auth';
const express = require('express');
//  const { getRepository, QueryBuilder } = require('typeorm');
// const database = require('./database');
const cors = require('cors')

let auth = new Authentication();
let app = express();

app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE,PATCH');
    app.use(cors());
    next();
});

app.use(express.json())

// CREATE USER
app.post("/user", async(req, res) => {
  console.log(req.body)
  let response = PostUserService(req.body);
  
  if (response === false) {
    let erro = {
      erro : "Já tem email cadastrado"
    }
    console.log(erro);
    return res.status(400).json(erro)
  }
  console.log(response)
  return res.status(200).json(response)
})

// ENDPOINT DE LOGIN E AUTENTICACAO Q RETORNA O TOKEN NA RESPONSE
app.post("/users/login", async(req, res) => {
  let response = await LoginUserService(req.body)
  if (response === null) {
    return res.status(404)
  }
  const token = auth.SetToken(response.acc_name, response.id_acc)
  return res.status(200).json({token:token})
})

// GET USER BY ID -- FAZER PELO TOKEN DE ACESSO
app.get("/users/:id", async(req, res) => {
  let userRepository = getRepository("User");
  let id = req.params["id"]
  const usuario = await userRepository.findOneBy(
    {
      idtb_user: id
    }    
  )

  if (usuario === null){
    return res.status(400).json({erro:"Not Found"})
  }
  
  return res.status(200).json({usuario});
})

// UPDATE USER
app.patch("/users/:id", async(req, res) => {
  let userRepository = getRepository("User");
  let id = req.params["id"]
  const {nome} = req.body;

  const usuario = await userRepository.update(
    {
    idtb_user: id,
    }, 
    {
    nome
    }
  );

  if (usuario === null){
    return res.status(400).json({erro:"Not Found"})
  }

  return res.status(200).json({usuario});
})

// TESTE
app.get("/teste", async(req, res) => {
  return res.status(200).json({msg: "msg"})
})

// GET NEXT TRIP
app.get("/nexttrip", async(req, res) => {
  let travelRepository = getRepository("Travel");
  let travel = await travelRepository.findOneBy(1);
  return res.status(200).json(travel)
})

//FUNCAO RECEBE TOKEN E RETORNA ID DO USUARIO APOS VALIDACAO

app.listen(3333, () => {
  console.log("Running on port 3333")
  })
const express = require('express');
const { getRepository, QueryBuilder } = require('typeorm');
const database = require('./database');
const cors = require('cors')

require('./database')

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

app.post("/users", async(req, res) => {
  let userRepository = getRepository("User");
  console.log(req.body);

  const {nome, email} = req.body;
  let user = await userRepository.findOne(
    {
      where: {email}
    }
  );

  if (user === null){
    const usuarios = await userRepository.save(req.body);
    return res.status(200).json({email, nome});
  }

  let erro = {
    erro : "Já tem email cadastrado"
  }
  return res.status(400).json(erro);  
})

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

app.get("/users", async(req, res) => {
  let userRepository = getRepository("User");
  let users = await userRepository.find();
  return res.status(200).json(users)
})

app.get("/teste", async(req, res) => {
  return res.status(200).json({msg: "msg"})
})

app.listen(3333, () => {
  console.log("Running on port 3333")
  })
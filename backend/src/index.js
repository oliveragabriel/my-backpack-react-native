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

app.post("/user", async(req, res) => {
  let userRepository = getRepository("User");
  // console.log(req.body);

  let {email, birth} = req.body;
  let user = await userRepository.findOne(
    {
      where: {email}
    }
  );

  if (user === null){
    birth = FormataStringData(birth);
    user = {
      ...req.body, birth
    }
    // console.log(user);
    const savedUser = await userRepository.save(user);
    return res.status(200).json(savedUser);
  }

  let erro = {
    erro : "Já tem email cadastrado"
  }
  // console.log(erro);
  return res.status(400).json(erro);  

})

function FormataStringData(data) {
  var dia  = data.split("/")[0];
  var mes  = data.split("/")[1];
  var ano  = data.split("/")[2];

  return ano + '-' + ("0"+mes).slice(-2) + '-' + ("0"+dia).slice(-2);
  // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
}




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

app.get("/nexttrip", async(req, res) => {
  let travelRepository = getRepository("Travel");
  let travel = await travelRepository.findOneBy(1);
  return res.status(200).json(travel)
})

app.listen(3333, () => {
  console.log("Running on port 3333")
  })
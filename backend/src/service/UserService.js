import FormataStringData from './index'
import Authentication from '../auth';
const {FormataStringData} = require('./index');
const { getRepository, QueryBuilder } = require('typeorm');
const database = require('../database');

export const PostUserService = async(data) => {
  console.log("no service")
  let userRepository = getRepository("User");
  let {email} = data;
  let isUserSaved = await userRepository.findOne(
    {
      where: {email}
    }
  );
  
  if (isUserSaved === null){
    const savedUser = await userRepository.save(data);
    console.log(savedUser);
    return savedUser;
  }
  return false;  
}

export const LoginUserService = async (data) => {
  let userRepository = getRepository("User");
  let {email, acc_password} = data;
  let isUserValid = await userRepository.findOne(
    {
      where: {email, acc_password}
    }
  );
  return isUserValid;
}

export const GetUserData = async (id) => {
  let userRepository = getRepository("User");
  const usuario = await userRepository.findOneBy(
    {
      id_acc: id
    }
  )
  // console.log({acc_name: usuario.acc_name, email: usuario.email})
  return {acc_name: usuario.acc_name, email: usuario.email}
}
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
  let isUserSaved = await userRepository.findOne(
    {
      where: {email, acc_password}
    }
  );
  
  return isUserSaved;
}
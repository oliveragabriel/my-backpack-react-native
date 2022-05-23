import FormataStringData from './index'
const {FormataStringData} = require('./index');
const { getRepository, QueryBuilder } = require('typeorm');
const database = require('../database');

const UserService = async(data) => {
  console.log("no service")
  let userRepository = getRepository("User");
  let {email, birth} = data;
  let user = await userRepository.findOne(
    {
      where: {email}
    }
  );
  
  if (user === null){
    birth = FormataStringData(birth);
    console.log(birth)
    user = {
      ...data, birth
    }
    const savedUser = await userRepository.save(user);
    console.log(savedUser);
    return savedUser;
  }
  return false;  
}

export default UserService;
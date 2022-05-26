const { getRepository, QueryBuilder } = require('typeorm');
const database = require('../database');


export const GetNextTravel = async (id) => {
  let travelRepository = getRepository("Travel");
  let travel = await travelRepository.findOne(
      {
        where: {id_acc: id}
      }
    // [
    ,
    // {
    //   done:"false"
    // }],
    // order: {
    //   departure_date: "ASC"
    // },
  );

  console.log(travel)
  return travel
}
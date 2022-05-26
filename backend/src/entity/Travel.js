const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Travel",
  tableName: "travel",
  relations:{
    user_travel: {
      target: "User",
      type: "many-to-one",
      joinColumn: {
        name: "id_acc"
      },
      inverseSide: "travel_user",
    },
    accomodation_travel: {
      target: "Accomodation",
      type: "one-to-many",
      inverseSide: "travel_accomodation"
    },
    day_travel: {
      target: "TravelDay",
      type: "one-to-many",
      inverseSide: "travel_day"
    },
    trp_travel: {
      target: "Transport",
      type: "one-to-many",
      inverseSide: "travel_trp"
    }
  },
  columns: {
    id_travel: {
      primary: true,
      type: "int",
      generated: true
    },
    title: {
      nullable: false,
      type: "varchar",
    },
    departure_date: {
      nullable: false,
      type: "date"
    },
    arrival_date: {
      nullable: false,
      type: "date"
    },
    travel_type: {
      type: "varchar",
    },
    done: {
      type: "boolean"
    },
    id_acc: {
      nullable: false,
      type: "int"
    }
  }
})
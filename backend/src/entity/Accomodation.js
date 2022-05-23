const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Accomodation",
  tableName: "accomodation",
  relations:{
    travel_accomodation: {
      target: "Travel",
      type: "many-to-one",
      joinColumn: "id_travel",
      cascade: true,
      inverseStide: "accomodation_travel"
    },
    day_acmod: {
      target: "TravelDay",
      type: "many-to-one",
      inverseSide: "acmod_day"
    }
  },
  columns: {
    id_accommodation: {
      primary: true,
      type: "int",
      generated: true
    },
    description: {
      nullable: false,
      type: "varchar",
    },
    arrival_date: {
      nullable: false,
      type: "date"
    },
    departure_date: {
      nullable: false,
      type: "date"
    },
    acm_type: {
      nullable: false,
      type: "varchar",
    },
    acm_value: {
      nullable: false,
      type: "float"
    },
    id_travel: {
      nullable: false,
      type: "int"
    }
  }
})
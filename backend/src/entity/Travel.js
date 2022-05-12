const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Travel",
  tableName: "travel",
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
    type: {
      type: "varchar",
    },
    done: {
      type: "boolean"
    },
    id_user: {
      nullable: false,
      type: "int"
    }
  }
})
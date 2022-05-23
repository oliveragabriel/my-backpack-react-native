const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Wish",
  tableName: "wish",
  relations:{
    user_wish: {
      target: "User",
      type: "many-to-one",
      inverseSide: "wish_user"
    }
  },
  columns: {
    id_wish: {
      primary: true,
      type: "int",
      generated: true
    },
    description: {
      nullable: false,
      type: "varchar",
    },
    id_acc: {
      nullable: false,
      type: "int"
    }
  }
})
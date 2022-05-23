const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "User",
  tableName: "account",
  relations:{
    travel_user: {
      target: "Travel",
      type: "one-to-many",
      cascade: true,
      inverseSide: "relation_user"
    },
    wish_user: {
      target: "Wish",
      type: "one-to-many",
      cascade: true,
      inverseSide: "user_wish"
    },

  },
  columns: {
    id_acc: {
      primary: true,
      type: "int",
      generated: true
    },
    acc_name: {
      nullable: false,
      type: "varchar",
    },
    birth: {
      type: "date"
    },
    email: {
      nullable: false,
      type: "varchar",
      unique: true
    },
    phone: {
      type: "varchar"
    },
    nationality: {
      type: "varchar"
    },
    city: {
      type: "varchar"
    },
    acc_password: {
      nullable: false,
      type: "varchar"
    }
  }
})
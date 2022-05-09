const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "User",
  tableName: "usuario",
  columns: {
    id_user: {
      primary: true,
      type: "int",
      generated: true
    },
    name: {
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
    password: {
      nullable: false,
      type: "varchar"
    }
  }
})
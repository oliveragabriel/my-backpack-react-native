const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
    name: "Activity",
    tableName: "activity",
    relations:{
        day_actv: {
            target: "TravelDay",
            type: "one-to-many",
            joinColumn: "id_day",
            inverseSide: "actv_day"
        }
    },
    columns: {
        id_activity: {
            primary: true,
            type: "int",
            generated: true
        },
        description: {
            nullable: false,
            type: "varchar",
        },
        atv_type: {
            nullable: false,
            type: "varchar"
        },
        atv_value: {
            nullable: false,
            type: "float"
        },
        ended: {
            type: "boolean"
        },
        atv_time: {
            type: "time"
        },
        id_travel: {
            nullable: false,
            type: "int"
        },
        id_day: {
          nullable: false,
          type: "int"
      }
    }
})
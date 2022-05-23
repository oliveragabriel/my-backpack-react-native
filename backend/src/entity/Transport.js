const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
    name: "Transport",
    tableName: "transport",
    relations:{
        travel_trp: {
            target: "Travel",
            type: "many-to-one",
            joinColumn: "id_travel",
            inverseSide: "trp_travel"
        }
    },
    columns: {
        id_transport: {
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
        trp_type: {
          nullable: false,
          type: "varchar"
        },
        trp_value: {
            nullable: false,
            type: "float"
        },
        arrival_place: {
          nullable: false,
          type: "varchar"
        },
        departure_place: {
          nullable: false,
          type: "varchar"
        },
        id_travel: {
            nullable: false,
            type: "int"
        }
    }
})
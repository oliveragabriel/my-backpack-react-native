const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
    name: "TravelDay",
    tableName: "travel_day",
    relations:{
        travel_day: {
            target: "Travel",
            type: "many-to-one",
            joinColumn: "id_travel",
            cascade: true,
            inverseSide: "day_travel"
        },
        acmod_day: {
            target: "Accomodation",
            type: "many-to-one",
            joinColumn: "id_accomodation",
            inverseSide: "day_acmod"
        }
        ,
        actv_day: {
            target: "Activity",
            type: "many-to-one",
            cascade: true,
            inverseSide: "day_actv"
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
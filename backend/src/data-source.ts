import "reflect-metadata";
import { DataSource } from "typeorm";
import { Accomodation } from "./entity/Accomodation";
import { Activity } from "./entity/Activity";
import { Transport } from "./entity/Transport";
import { Travel } from "./entity/Travel";
import { TravelDay } from "./entity/TravelDay";
import { User } from "./entity/User";
import { Wish } from "./entity/Wish";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "senai",
    database: "gobackpack",
    synchronize: true,
    logging: false,
    entities: [
        Accomodation,
        Activity,
        Transport,
        Travel,
        TravelDay,
        User,
        Wish
    ],
    migrations: [],
    subscribers: [],
});

export const setTestData = async () => {
    const em = AppDataSource.manager;
    if (!(await em.count(User))) {
        await em.query(`
            INSERT INTO user (name, email, password) VALUES ("ana", "ana@gmail.com", "1234");
        `);

        await em.query(`
            INSERT INTO user (name, email, password) VALUES ("gabriel", "gabriel@gmail.com", "1234");
        `);

        await em.query(`
            INSERT INTO user (name, email, password) VALUES ("rafael", "rafael@gmail.com", "1234");
        `);
            
        await em.query(`
            INSERT INTO travel (title, arrivalDate, departureDate, type, userId)
            VALUES ("USA", "2022-07-15", "2022-07-25", "turismo", "1");
        `);
        await em.query(`
            INSERT INTO travel (title, arrivalDate, departureDate, type, userId)
            VALUES ("Europa", "2021-07-15", "2021-07-25", "turismo", "1");
        `);
        await em.query(`
            INSERT INTO travel (title, arrivalDate, departureDate, type, userId)
            VALUES ("Japão", "2023-07-15", "2023-07-25", "turismo", "1");
        `);
    }
};
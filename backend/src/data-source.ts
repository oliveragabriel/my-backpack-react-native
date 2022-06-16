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
    password: "123456",
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
            VALUES ("Japão/Korea", "2023-07-15", "2023-07-17", "turismo", "1");
        `);
        await em.query(`
            INSERT INTO travel_day (day, country, city, travelId) VALUES ('2023-07-15', 'japão', 'osaka', 3);
        `);
        await em.query(`
            INSERT INTO travel_day (day, country, city, travelId) VALUES ('2023-07-16', 'japão', 'tokyo', 3);
        `);
        await em.query(`
            INSERT INTO travel_day (day, country, city, travelId) VALUES ('2023-07-17', 'korea', 'seoul', 3);
        `);
        await em.query(`
          INSERT INTO travel_day (country, city, travelid)
          VALUES ("EUA", "Miami", "1");
        `);
        await em.query(`
          INSERT INTO activity (description, type, value, time, travelDayId)
          VALUES ("Museu", "educacao", "300", "12:00", "1");
        `);
    }
};
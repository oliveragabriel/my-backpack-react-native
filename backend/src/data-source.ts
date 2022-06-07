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

    let em = AppDataSource.manager;

    let users = await em.count(User);
    if (!users) {

        const user1 = new User();
        user1.name = "ana";
        user1.email = "ana@gmail.com";
        user1.password = "1234";
        await user1.save();

        const user2 = new User();
        user2.name = "gabriel";
        user2.email = "gabriel@gmail.com";
        user2.password = "1234";
        await user2.save();

        const travel1 = new Travel();
        travel1.title = 'USA';
        travel1.arrivalDate = '2022-07-02';
        travel1.departureDate = '2022-07-15';
        travel1.type = 'turismo';
        travel1.isDone = false;
        travel1.user = user1;
        await travel1.save();

    }

}
import * as express from "express";
import * as bodyParser from "body-parser";
import { AppDataSource, setTestData } from "./data-source";
import { initializeRoutes } from "./routes";

AppDataSource.initialize().then(async () => {

    await setTestData();
    const app = express();
    app.use(bodyParser.json());
    //app.use(cors());
    initializeRoutes(app);

    app.listen(3000, () => {
        console.log("Express server has started on port 3000");
    });

}).catch(error => console.log(error));
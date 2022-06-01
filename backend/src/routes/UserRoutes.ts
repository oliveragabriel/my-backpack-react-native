import { Application } from "express";
import { User } from "../entity/User";
import { CommonRoutes } from "./CommonRoutes";

const parent: string = 'users';

export class UserRoutes extends CommonRoutes {

    maps = [
        {
            method: "get",
            action: "all",
            route: `/${parent}`
        }, {
            method: "get",
            action: "one",
            route: `/${parent}/:id`
        }, {
            method: "post",
            action: "save",
            route: `/${parent}`
        }, {
            method: 'patch',
            action: 'update',
            route: `/${parent}/:id`
        }, {
            method: "delete",
            action: "remove",
            route: `/${parent}/:id`
        }
    ];

    constructor(app: Application) {
        super(app);
        this.configureRoutes(User);
    }

}
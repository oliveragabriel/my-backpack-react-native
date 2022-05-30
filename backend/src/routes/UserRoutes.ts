import { Application, Request, Response, NextFunction } from "express";
import { UserController } from "../controller/UserController";
import { CommonRoutes } from "./CommonRoutes";

export class UserRoutes extends CommonRoutes {

    maps = [
        {
            method: "get",
            route: "/users",
            action: "all"
        }, {
            method: "get",
            route: "/users/:id",
            action: "one"
        }, {
            method: "post",
            route: "/users",
            action: "save"
        }, {
            method: 'patch',
            route: '/users/:id',
            action: 'update'
        }, {
            method: "delete",
            route: "/users/:id",
            action: "remove"
        }
    ];

    controller = UserController;

    constructor(app: Application) {
        super(app);
        this.configureRoutes();
    }

}
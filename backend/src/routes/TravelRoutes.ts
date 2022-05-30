import { Application, Request, Response, NextFunction } from "express";
import { TravelController } from "../controller/TravelController";
import { CommonRoutes } from "./CommonRoutes";

export class TravelRoutes extends CommonRoutes {

    maps = [
        {
            method: "get",
            route: "/travels",
            action: "all"
        }, {
            method: "get",
            route: "/travels/:id",
            action: "one"
        }, {
            method: "post",
            route: "/travels",
            action: "save"
        }, {
            method: 'patch',
            route: "/travels/:id",
            action: 'update'
        }, {
            method: "delete",
            route: "/travels/:id",
            action: "remove"
        }
    ];

    controller = TravelController;

    constructor(app: Application) {
        super(app);
        this.configureRoutes();
    }

}
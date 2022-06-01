import { Application } from "express";
import { Travel } from "../entity/Travel";
import { CommonRoutes } from "./CommonRoutes";

const parent: string = 'users';
const child: string = 'travels';

export class TravelRoutes extends CommonRoutes {

    maps = [
        {
            method: "get",
            action: "allBy",
            route: `/${parent}/:id/${child}`
        }, {
            method: "post",
            action: "saveBy",
            route: `/${parent}/:id/${child}`
        }, {
            method: "get",
            action: "one",
            route: `/${child}/:id`
        }, {
            method: "get",
            action: "all",
            route: `/${child}`
        }, {
            method: 'patch',
            action: 'update',
            route: `/${child}/:id`
        }, {
            method: "delete",
            action: "remove",
            route: `/${child}/:id`
        }
    ];

    constructor(app: Application) {
        super(app);
        this.configureRoutes(Travel);
    }

}
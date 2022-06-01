import { Application, Request, Response, NextFunction } from "express";
import { Controller } from "../controller/Controller";

type routeMap = {
    method: string
    action: string
    route: string
}

export class Route {

    app: Application;
    maps: routeMap[];

    constructor(app: Application) {
        this.app = app;
    }

    configureRoutes(entity: any) {

        this.maps.forEach(route => {

            this.app[route.method](route.route, (req: Request, res: Response, next: NextFunction) => {

                const result = (new Controller(entity))[route.action](req, res, next);

                if (result instanceof Promise) {
                    result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);
    
                } else if (result !== null && result !== undefined) {
                    res.json(result);
                }

            });
        });
    }

}
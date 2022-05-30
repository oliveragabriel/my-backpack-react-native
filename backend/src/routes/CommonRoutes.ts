import { Application, Request, Response, NextFunction } from "express";

type routeMap = {
    method: string
    route: string
    action: string
}

export abstract class CommonRoutes {

    app: Application;
    abstract maps: routeMap[];
    abstract controller: any;

    constructor(app: Application) {
        this.app = app;
    }

    configureRoutes() {

        this.maps.forEach(route => {

            this.app[route.method](route.route, (req: Request, res: Response, next: NextFunction) => {

                const result = (new this.controller)[route.action](req, res, next);

                if (result instanceof Promise) {
                    result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);
    
                } else if (result !== null && result !== undefined) {
                    res.json(result);
                }

            });
        });
    }

}
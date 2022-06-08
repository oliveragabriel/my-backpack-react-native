import { Application, Request, Response, NextFunction } from "express";
import { Controller } from "../controller/Controller";

type routeMap = {
    action: string
    method: string
    route: string
}

export class Route {

    app: Application;
    controller: Controller;
    maps: routeMap[];

    constructor(app: Application, entity: any, child: string, parent?: string) {

        this.app = app;
        this.controller = new Controller(entity);

        this.maps = [

            {action: "all",         method: "get",      route: `/${child}`},
            {action: "oneBy",       method: "get",      route: `/${child}/:id`},
            {action: 'updateBy',    method: 'patch',    route: `/${child}/:id`},
            {action: "removeBy",    method: "delete",   route: `/${child}/:id`}

        ].concat((parent === undefined) ? [

            {action: "login",       method: "post",     route: `/${child}/login`},
            {action: "save",        method: "post",     route: `/${child}`},
            {action: "userAsdf",        method: "get",     route: `/asdf/:id`}

        ] : [

            {action: "allBy",       method: "get",      route: `/${parent}/:id/${child}`},
            {action: "saveBy",      method: "post",     route: `/${parent}/:id/${child}`}

        ]);

        this.configureRoutes();
    }

    configureRoutes() {

        this.maps.forEach(route => {

            this.app[route.method](route.route, async (req: Request, res: Response, next: NextFunction) => {

                console.log(`Request received: ${route.method} @ ${route.route}`);

                const {status, body, headers} = await this.controller[route.action](req, res, next);

                if (headers !== undefined) res.status(status).header(headers).json(body);
                else res.status(status).json(body);

            });
        });
    }

}
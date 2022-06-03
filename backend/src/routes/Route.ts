import { Application, Request, Response, NextFunction } from "express";
import { Controller } from "../controller/Controller";
import { User } from "../entity/User";

type routeMap = {
    action: string
    method: string
    route: string
}

export class Route {

    app: Application;
    entity: any;
    maps: routeMap[];

    constructor(app: Application, entity: any, child: string, parent?: string) {
        this.app = app;
        this.entity = entity;
        this.maps = (entity === User) ? this.configureUserMaps(child) : this.configureMaps(child, parent);
        this.configureRoutes();
    }

    configureUserMaps(child: string) {
        console.log("criou rotas de user");
        return [
            {action: "all",         method: "get",      route: `/${child}`},
            {action: "oneBy",       method: "get",      route: `/${child}/:id`},
            {action: "login",       method: "post",     route: `/${child}/login`},
            {action: "save",        method: "post",     route: `/${child}`},
            {action: 'updateBy',    method: 'patch',    route: `/${child}/:id`},
            {action: "removeBy",    method: "delete",   route: `/${child}/:id`},
        ];
    }

    configureMaps(child: string, parent: string) {
        return [
            {action: "all",         method: "get",      route: `/${child}`},
            {action: "allBy",       method: "get",      route: `/${parent}/:id/${child}`},
            {action: "oneBy",       method: "get",      route: `/${child}/:id`},
            {action: "save",        method: "post",     route: `/${child}`},
            {action: "saveBy",      method: "post",     route: `/${parent}/:id/${child}`},
            {action: 'updateBy',    method: 'patch',    route: `/${child}/:id`},
            {action: "removeBy",    method: "delete",   route: `/${child}/:id`},
        ];
    }

    configureRoutes() {

        this.maps.forEach(route => {

            this.app[route.method](route.route, async (req: Request, res: Response, next: NextFunction) => {
                console.log(`Request received: ${route.method} @ ${route.route}`);
                const {status, body} = await (new Controller(this.entity))[route.action](req, res, next);
                res.status(status).json(body);

                /*
                const result = await (new Controller(this.entity))[route.action](req, res, next);
                if (result instanceof Promise) {
                    result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);
    
                } else if (typeof result === 'strResponse')  {

                } else if (result !== null && result !== undefined) {
                    res.json(result);
                } else {
                    route.method === 'get' ? res.status(404).send('Not found') : res.status(400).send("Bad request");
                }
                */
            });
        });
    }

}
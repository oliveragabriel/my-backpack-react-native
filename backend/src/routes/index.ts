import { Application } from 'express';
import { TravelRoutes } from './TravelRoutes';
import { UserRoutes } from './UserRoutes';

export const initializeRoutes = (app: Application) => {
    new TravelRoutes(app);
    new UserRoutes(app);
}

let parent: string
let child: string

const asdf = [
    {action: "all",     method: "get",      route: `/${child}`},
    {action: "allBy",   method: "get",      route: `/${parent}/:id/${child}`},
    {action: "one",     method: "get",      route: `/${child}/:id`},
    {action: "save",    method: "post",     route: `/${child}`},
    {action: "saveBy",  method: "post",     route: `/${parent}/:id/${child}`},
    {action: 'update',  method: 'patch',    route: `/${child}/:id`},
    {action: "remove",  method: "delete",   route: `/${child}/:id`},
];
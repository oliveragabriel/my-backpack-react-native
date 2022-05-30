import { NextFunction, Request, Response } from "express";

export abstract class CommonController {

    abstract entity: any;

    async all(request: Request, response: Response, next: NextFunction) {
        return await this.entity.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return await this.entity.findOneBy({id: request.params.id});
    }
}
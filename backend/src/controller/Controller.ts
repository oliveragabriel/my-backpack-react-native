import { NextFunction, Request, Response } from "express";

export class Controller {

    entity: any;

    constructor(entity: any) {
        this.entity = entity;
    }

    async all(request: Request, response: Response, next: NextFunction) {
        return await this.entity.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return await this.entity.findOneBy({id: request.params.id});
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return await this.entity.createService(request.body);
    }

    async saveBy(request: Request, response: Response, next: NextFunction) {
        return await this.entity.createService(request.body, parseInt(request.params.id));
    }

    async allBy(request: Request, response: Response, next: NextFunction) {
        return await this.entity.readService(parseInt(request.params.id));
    }

}
import { NextFunction, Request, Response } from "express";

export class Controller {

    entity: any;

    constructor(entity: any) {
        this.entity = entity;
    }

    async all(request: Request, response: Response, next: NextFunction) {
        return await this.entity.find();
    }

    async oneBy(request: Request, response: Response, next: NextFunction) {
        const result = await this.entity.findOneBy({id: request.params.id});
        return result;
    }

    async login(request: Request, response: Response, next: NextFunction) {
        const result = await this.entity.loginService(request.body);
        return {id_acc: result.id};
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return await this.entity.createService(request.body);
    }

    async saveBy(request: Request, response: Response, next: NextFunction) {
        return await this.entity.createByService(request.body, parseInt(request.params.id));
    }

    async allBy(request: Request, response: Response, next: NextFunction) {
        return await this.entity.readByService(parseInt(request.params.id));
    }

    async updateBy(request: Request, response: Response, next: NextFunction) {
        return await this.entity.updateService(request.body ,parseInt(request.params.id));
    }

    async removeBy(request: Request, response: Response, next: NextFunction) {
        return await this.entity.removeService(parseInt(request.params.id));
    }
}
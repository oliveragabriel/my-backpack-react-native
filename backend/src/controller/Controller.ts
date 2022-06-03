import { NextFunction, Request, Response } from "express";

export class Controller {

    entity: any;

    constructor(entity: any) {
        this.entity = entity;
    }

    stdResponse(status: number, body: object | object[]) {
        return {status: status, body: body};
    }

    msgResponse(status: number, msg: string) {
        return {status: status, body: {msg: msg}};
    }

    async all(request: Request, response: Response, next: NextFunction) {
        const result = await this.entity.find();
        if (result.length) return this.stdResponse(200, result);
        return this.msgResponse(404, 'Resultado não foi encontrado!');
    }

    async oneBy(request: Request, response: Response, next: NextFunction) {
        const result = await this.entity.findOneBy({id: request.params.id});
        if (result !== null) return this.stdResponse(200, result);
        return this.msgResponse(404, 'Resultado não foi encontrado!');
    }

    async login(request: Request, response: Response, next: NextFunction) {
        const result = await this.entity.loginService(request.body);
        if (result !== null) return this.stdResponse(200, {id_acc: result.id});
        return this.msgResponse(403, 'Credenciais inválidas!');
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const result: boolean = await this.entity.createService(request.body);
        if (result) return this.msgResponse(200, 'Usuário registrado com sucesso');
        return this.msgResponse(400, 'Email já utilizado!');
    }

    async saveBy(request: Request, response: Response, next: NextFunction) {
        const result = await this.entity.createByService(request.body, parseInt(request.params.id));
        if (result !== null) return this.stdResponse(200, result);
        return this.msgResponse(400, 'Não foi possível registrar a entidade!');
    }

    async allBy(request: Request, response: Response, next: NextFunction) {
        const result = await this.entity.readByService(parseInt(request.params.id));
        if (result.length) return this.stdResponse(200, result);
        return this.msgResponse(404, 'Resultado não foi encontrado!');
    }

    // TODO
    async updateBy(request: Request, response: Response, next: NextFunction) {
        const result = await this.entity.updateService(request.body ,parseInt(request.params.id));
        return;
    }

    // TODO
    async removeBy(request: Request, response: Response, next: NextFunction) {
        const result = await this.entity.removeService(parseInt(request.params.id));
        return;
    }
}
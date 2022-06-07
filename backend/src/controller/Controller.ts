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


    // TESTE
    async all(request: Request, response: Response, next: NextFunction) {
        const result = await this.entity.find();
        if (result.length) return this.stdResponse(200, result);
        return this.msgResponse(404, 'Resultado não foi encontrado!');
    }


    async allBy(request: Request, response: Response, next: NextFunction) {
        const result = await this.entity.readByService(parseInt(request.params.id));
        if (result.length) return this.stdResponse(200, result);
        return this.msgResponse(404, 'Resultado não foi encontrado!');
    }


    async oneBy(request: Request, response: Response, next: NextFunction) {
        const result = await this.entity.findOneBy({id: parseInt(request.params.id)});
        if (result !== null) return this.stdResponse(200, result);
        return this.msgResponse(404, 'Resultado não foi encontrado!');
    }


    async login(request: Request, response: Response, next: NextFunction) {
        const result = await this.entity.loginService(request.body);
        if (result !== null) return this.stdResponse(200, {id: result.id});
        return this.msgResponse(403, 'Credenciais inválidas!');
    }


    async save(request: Request, response: Response, next: NextFunction) {
        const result: boolean = await this.entity.createService(request.body);
        if (result) return this.msgResponse(201, 'Usuário cadastrado com sucesso');
        return this.msgResponse(400, 'Não foi possível cadastrar o usuário. Por favor, tente novamente!');
    }


    async saveBy(request: Request, response: Response, next: NextFunction) {
        const result = await this.entity.createByService(request.body, parseInt(request.params.id));
        if (result !== null) return this.stdResponse(201, result);
        return this.msgResponse(400, 'Não foi possível registrar a entidade!');
    }


    async updateBy(request: Request, response: Response, next: NextFunction) {
        const result = await this.entity.update({id: parseInt(request.params.id)}, request.body);
        if (result.affected) return this.stdResponse(200, await this.entity.findOneBy({id: parseInt(request.params.id)}));
        return this.msgResponse(404, 'Não foi possível concluir a operação. Por favor, tente novamente!');
    }


    async removeBy(request: Request, response: Response, next: NextFunction) {
        const result = await this.entity.findOneBy({id: parseInt(request.params.id)});
        if (result !== null) {
            await result.remove();
            return this.msgResponse(200, 'Registro excluído com sucesso!');
        }
        return this.msgResponse(404, 'Resultado não foi encontrado!');
    }

    /*
    async validateUser(protectedMode: string, id: number) {
        if (protectedMode === 'modeChild') {
            const userId = await this.entity.getUserId(id);
            console.log('userIdChid', userId);
        } else {
            const userId = await this.entity.getUserIdByParent(id);
            console.log('userIdParent', userId);
        }
        return true;
    }
    */
}
//import { NextFunction, Request, Response } from "express";
//import { AppDataSource } from "../data-source";
import { Travel } from "../entity/Travel";
import { CommonController } from "./CommonController";

export class TravelController extends CommonController {

    entity = Travel;

    /*
    private travelRepository = AppDataSource.getRepository(Travel);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.travelRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.travelRepository.findOne({
            where: {
                id: parseInt(request.params.id)
            }
        });
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.travelRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let travelToRemove = await this.travelRepository.findOneBy({ id: parseInt(request.params.id) });
        await this.travelRepository.remove(travelToRemove);
    }
    */
}
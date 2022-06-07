import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity } from "typeorm";
import { Travel } from "./Travel";

type accomodationType = {
    description: string
    arrivalDate: string
    departureDate: string
    type: string
    value: number
}

@Entity()
export class Accomodation extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    description: string

    @Column('date')
    arrivalDate: string

    @Column('date')
    departureDate: string

    @Column()
    type: string

    @Column()
    value: number

    @Column()
    travelId: number    

    @ManyToOne(() => Travel, (travel) => travel.accomodations, { onDelete: "CASCADE" })
    travel: Travel


    static async createByService(data: accomodationType, id: number): Promise<Accomodation> {
        return await Accomodation.create({
            ...data,
            travel: await Travel.findOneBy({id: id})
        }).save();
    }


    static async readByService(id: number) {
        return Accomodation.findBy({travelId: id});
    }


    static async getUserId(id: number) {
        return await Travel.getUserId(
            (await Accomodation.findOneBy({id: id})).travelId
        );
    }

    static async getUserIdByParent(id: number) {
        return await Travel.getUserId(id);
    }
}
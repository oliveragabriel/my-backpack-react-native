import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity } from "typeorm";
import { Travel } from "./Travel";

@Entity()
export class Transport extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    description: string

    @Column()
    type: string

    @Column()
    value: number

    @Column('date')
    arrivalDate: string

    @Column('date')
    departureDate: string

    @Column()
    arrivalPlace: string

    @Column()
    departurePlace: string

    @Column()
    travelId: number

    @ManyToOne(() => Travel, (travel) => travel.transports, { onDelete: "CASCADE" })
    travel: Travel


    static async createByService(data, id: number): Promise<Transport> {
        return await Transport.create({
            ...data,
            travel: await Travel.findOneBy({id: id})
        }).save();
    }


    static async readByService(id: number) {
        return Transport.findBy({travelId: id});
    }


    static async findOneByService(id: number) {
        return await Transport.findOneBy({id: id});
    }


    static async getUserId(id: number) {
        return await Travel.getUserId(
            (await Transport.findOneBy({id: id})).travelId
        );
    }

    static async getUserIdByParent(id: number) {
        return await Travel.getUserId(id);
    }
}
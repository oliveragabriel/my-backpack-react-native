import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity } from "typeorm";
import { TravelDay } from "./TravelDay";

@Entity()
export class Activity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    description: string

    @Column()
    type: string

    @Column()
    value: number

    @Column('time')
    time: string

    @Column()
    travelDayId: number

    @ManyToOne(() => TravelDay, (travelDay) => travelDay.activities, { onDelete: "CASCADE" })
    travelDay: TravelDay


    static async createByService(data, id: number): Promise<Activity> {
        return await Activity.create({
            ...data,
            travelDay: await TravelDay.findOneBy({id: id})
        }).save();
    }


    static async readByService(id: number) {
        return await Activity.findBy({travelDayId: id});
    }


    static async findOneByService(id: number) {
        return await Activity.findOneBy({id: id});
    }


    static async getUserId(id: number) {
        return await TravelDay.getUserId(
            (await Activity.findOneBy({id: id})).travelDayId
        );
    }

    static async getUserIdByParent(id: number) {
        return await TravelDay.getUserId(id);
    }
}
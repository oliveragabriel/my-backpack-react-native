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

    @Column('boolean')
    isDone: boolean

    @Column()
    travelDayId: number

    @ManyToOne(() => TravelDay, (travelDay) => travelDay.activities, { onDelete: "CASCADE" })
    travelDay: TravelDay


    static async createByService(data, id: number): Promise<Activity> {
        return await Activity.create({
            ...data,
            idDone: false,
            travelDay: await TravelDay.findOneBy({id: id})
        }).save();
    }


    static async readByService(id: number) {
        return Activity.findBy({travelDayId: id});
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
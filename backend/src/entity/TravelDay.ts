import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, BaseEntity } from "typeorm";
import { Activity } from "./Activity";
import { Travel } from "./Travel";

type travelDayType = {
    country: string
    city: string
}

@Entity()
export class TravelDay extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column('date')
    day: Date

    @Column({nullable: true})
    country: string

    @Column({nullable: true})
    city: string

    @Column()
    travelId: number

    @ManyToOne(() => Travel, (travel) => travel.travelDays, { onDelete: "CASCADE" })
    travel: Travel

    @OneToMany(() => Activity, (activity) => activity.travelDay)
    activities: Activity[]


    static async createByService(data: travelDayType, id: number): Promise<TravelDay> {
        return await TravelDay.create({
            ...data,
            travel: await Travel.findOneBy({id: id})
        }).save();
    }


    static async readByService(id: number) {
        return TravelDay.findBy({travelId: id});
    }


    static async findOneByService(id: number) {
        return await TravelDay.findOneBy({id: id});
    }


    static async getUserId(id: number) {
        return await Travel.getUserId(
            (await TravelDay.findOneBy({id: id})).travelId
        );
    }

    static async getUserIdByParent(id: number) {
        return await Travel.getUserId(id);
    }
}
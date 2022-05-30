import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { TravelDay } from "./TravelDay";

@Entity()
export class Activity {

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

    @ManyToOne(() => TravelDay, (travelDay) => travelDay.activities)
    travelDay: TravelDay

}
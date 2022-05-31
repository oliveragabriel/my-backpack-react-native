import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Activity } from "./Activity";
import { Travel } from "./Travel";

@Entity()
export class TravelDay {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    country: string

    @Column()
    city: string

    @Column('boolean')
    isDone: boolean

    @ManyToOne(() => Travel, (travel) => travel.travelDays)
    travel: Travel

    @OneToMany(() => Activity, (activity) => activity.travelDay)
    activities: Activity[]

}
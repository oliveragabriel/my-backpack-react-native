import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, BaseEntity } from "typeorm";
import { Accomodation } from "./Accomodation";
import { Transport } from "./Transport";
import { TravelDay } from "./TravelDay";
import { User } from "./User";

@Entity()
export class Travel extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column('date')
    arrivalDate: string

    @Column('date')
    departureDate: string

    @Column()
    type: string

    @Column('boolean')
    isDone: boolean

    @ManyToOne(() => User, (user) => user.travels)
    user: User

    @OneToMany(() => TravelDay, (travelDay) => travelDay.travel)
    travelDays: TravelDay[]

    @OneToMany(() => Accomodation, (accomodation) => accomodation.travel)
    accomodations: Accomodation[]

    @OneToMany(() => Transport, (transport) => transport.travel)
    transports: Transport[]

}
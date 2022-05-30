import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Travel } from "./Travel";

@Entity()
export class Accomodation {

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

    @ManyToOne(() => Travel, (travel) => travel.accomodations)
    travel: Travel

}
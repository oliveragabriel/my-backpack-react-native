import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity } from "typeorm";
import { Travel } from "./Travel";

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

    @ManyToOne(() => Travel, (travel) => travel.accomodations)
    travel: Travel

}
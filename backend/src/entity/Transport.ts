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

    @ManyToOne(() => Travel, (travel) => travel.transports)
    travel: Travel

}
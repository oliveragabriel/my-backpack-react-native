import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, BaseEntity } from "typeorm";
import { Accomodation } from "./Accomodation";
import { Transport } from "./Transport";
import { TravelDay } from "./TravelDay";
import { User } from "./User";

type travelType = {
    title: string
    arrivalDate: string
    departureDate: string
    type: string
}

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

    @Column()
    userId: number

    @ManyToOne(() => User, (user) => user.travels, { onDelete: "CASCADE" })
    user: User

    @OneToMany(() => TravelDay, (travelDay) => travelDay.travel)
    travelDays: TravelDay[]

    @OneToMany(() => Accomodation, (accomodation) => accomodation.travel)
    accomodations: Accomodation[]

    @OneToMany(() => Transport, (transport) => transport.travel)
    transports: Transport[]


    static async createByService(data: travelType, id: number): Promise<Travel> {
        return await Travel.create({
            ...data,
            isDone: false,
            user: await User.findOneBy({id: id})
        }).save();
    }


    static async readByService(id: number) {
        return await Travel.find({where: {userId: id}, order: {arrivalDate: 'ASC'}});
    }


    static async getUserId(id: number) {
        return (await Travel.findOneBy({id: id})).userId;
    }

    static async getUserIdByParent(id: number) {
        return id;
    }
}
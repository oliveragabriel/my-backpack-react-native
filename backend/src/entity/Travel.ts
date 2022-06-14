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
            user: await User.findOneBy({id: id})
        }).save();
    }


    static async readByService(id: number) {

        const result = {

            done: await Travel.query(`
                SELECT * FROM travel WHERE userId = ? AND arrivalDate < CURDATE() ORDER BY arrivalDate ASC
            `,[id]),

            notDone: await Travel.query(`
                SELECT * FROM travel WHERE userId = ? AND arrivalDate >= CURDATE() ORDER BY arrivalDate ASC
            `,[id])
        }

        if (result.done.length || result.notDone.length) return result;
        return null;
    }

    static async findOneByService(id: number) {

        const result = await Travel.query(`
            SELECT
                travel.id,
                travel.title,
                travel.arrivalDate,
                travel.departureDate,
                travel.type,
                COUNT(travel_day.id) AS days,
                COUNT(activity.id) AS activities,
                GROUP_CONCAT(DISTINCT travel_day.country, '') AS countries
            FROM
                travel
                LEFT JOIN travel_day ON
                travel_day.travelId = travel.id
                LEFT JOIN activity ON
                activity.travelDayId = travel_day.id
            WHERE
                travel.id = ?
            GROUP BY
                travel.id
        `,
        [id]);

        if (result.length) return result[0];
        return null;
    }

    static async getUserId(id: number) {
        return (await Travel.findOneBy({id: id})).userId;
    }

    static async getUserIdByParent(id: number) {
        return id;
    }
}
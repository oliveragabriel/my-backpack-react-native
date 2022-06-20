import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity } from "typeorm";
import { Travel } from "./Travel";
import { Wish } from "./Wish";

type userType = {
    name: string
    email: string
    password: string
}

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({unique: true})
    email: string

    @Column()
    password: string

    @OneToMany(() => Travel, (travel) => travel.user)
    travels: Travel[]

    @OneToMany(() => Wish, (wish) => wish.user)
    wishes: Wish[]

    static async createService(data: userType): Promise<boolean> {

        if (await User.findOneBy({email: data.email}) === null) {
            await User.create({...data}).save();
            return true;
        }
        return false;
    }

    static async findOneByService(id: number) {

        const result = await User.query(`
            SELECT
                user.id,
                user.name,
                user.email,
                COUNT(DISTINCT travel.id) AS travels,
                COUNT(DISTINCT travel_day.country) AS countries,
                COUNT(DISTINCT travel_day.city) AS cities,
                COUNT(activity.id) AS activities
            FROM
                user
                LEFT JOIN travel ON
                travel.userId = user.id
                LEFT JOIN travel_day ON
                travel_day.travelId = travel.id
                LEFT JOIN activity ON
                activity.travelDayId = travel_day.id
            WHERE
                user.id = ?
            GROUP BY
                user.id
        `,
        [id]);

        if (result.length) return result[0];
        return null;
    }

    static async findNextByService(id: number) {
        const userTravels = await Travel.readByService(id);
        if (userTravels !== null && userTravels.notDone.length) {
            return await Travel.findOneByService(userTravels.notDone[0].id);
        }
        return null;
    }

    static async loginService(data: {email: string, password: string}): Promise<User> {
        const {email, password} = data;
        return await User.findOne({where:{email: email, password: password}});
    }

    static async getUserId(id: number) {
        return id;
    }
}
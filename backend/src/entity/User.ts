import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity, EntitySchemaEmbeddedColumnOptions } from "typeorm";
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

    static async loginService(data: {email: string, password: string}): Promise<User> {
        const {email, password} = data;
        return await User.findOne({where:{email: email, password: password}});
    }

}
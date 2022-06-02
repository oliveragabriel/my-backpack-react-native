import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity, EntitySchemaEmbeddedColumnOptions } from "typeorm";
import { Travel } from "./Travel";
import { Wish } from "./Wish";

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

    static async createService(dataObj: any): Promise<User> {
        const newUser: User = User.create(dataObj);
        return newUser.save();
    }

    static async loginService(dataObj: {email: string, password: string}): Promise<User> {
        const {email, password} = dataObj;
        return await User.findOne({where:{email: email, password: password}});
    }

}
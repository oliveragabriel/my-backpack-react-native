import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity } from "typeorm";
import { User } from "./User";

@Entity()
export class Wish extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    description: string

    @Column()
    userId: number

    @ManyToOne(() => User, (user) => user.wishes, { onDelete: "CASCADE" })
    user: User


    static async createByService(data: {description: string}, id: number): Promise<Wish> {
        return await Wish.create({
            ...data,
            user: await User.findOneBy({id: id})
        }).save();
    }


    static async readByService(id: number) {
        return await Wish.findBy({userId: id});
    }


    static async getUserId(id: number) {
        return (await Wish.findOneBy({id: id})).userId;
    }

    static async getUserIdByParent(id: number) {
        return id;
    }
}
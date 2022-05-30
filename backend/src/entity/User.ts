import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity } from "typeorm";
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

}
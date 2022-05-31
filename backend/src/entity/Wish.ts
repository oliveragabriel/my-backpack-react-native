import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity()
export class Wish {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    description: string

    @ManyToOne(() => User, (user) => user.wishes)
    user: User

}
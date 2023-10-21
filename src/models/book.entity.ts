import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Book {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true })
  title: string;

  @ManyToOne(() => User, (user) => user.ownedBooks)
  owner: User;
}

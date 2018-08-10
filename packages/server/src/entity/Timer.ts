import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne
} from "typeorm";
import { User } from "./User";

@Entity("timer")
export class Timer extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("text")
  text: string;

  @Column("uuid")
  userId: string;

  @ManyToOne(() => User)
  user: User;

  @Column("uuid")
  listingId: string;
}

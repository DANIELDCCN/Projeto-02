import { type } from "os";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./Client";
import { Employee } from "./Employee";

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  idOrder: number;

  @OneToOne(() => Client, (client) => client.order)
  @JoinColumn()
  client: Client;

  @OneToOne(() => Employee, (employee) => employee.order)
  @JoinColumn()
  employee: Employee;

  @Column("timestamp", { default: () => "CURRENT_TIMESTAMP" })
  datePurchase: string;
}
import { type } from "os";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Products {
  @PrimaryGeneratedColumn()
  idProducts: number;

  @Column()
  nameProducts: string;

  @Column()
  cpfProducts: string;

  @Column({ type: "decimal", precision: 5, scale: 2 })
  salaryProducts: number;

  @Column()
  countProduct: number;
}
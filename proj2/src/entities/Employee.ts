import { Order } from './Order';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Employee {
	@PrimaryGeneratedColumn()
	idEmployee: number;

	@Column()
	nameEmployee: string;

	@Column()
	salaryEmployee: string;

	@OneToOne(() => Order, (order) => order.employee)
	order: Order;
}

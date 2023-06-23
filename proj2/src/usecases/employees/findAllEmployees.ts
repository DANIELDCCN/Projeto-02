import { AppDataSource } from "../../AppDataSource";
import { Employee } from "../../entities/Employee";

async function findAllEmployees() {
	const employeeRepository =  AppDataSource.getRepository(Employee);

	try {
		const employees = await employeeRepository.find();
		
		return employees;
	} catch (error) {
		console.error("Erro no findAllEmployees " + error);
		return undefined;
	}
}

export { findAllEmployees };
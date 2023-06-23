import { AppDataSource } from "../../AppDataSource";
import { Employee } from "../../entities/Employee";

interface IDataEmployee {
    nameEmployee: string;
    salaryEmployee: string;
  }

async function insertEmployee(dataEmployee: IDataEmployee){
	try{
	const employeeRepository = AppDataSource.getRepository(Employee);

	const employee: IDataEmployee = dataEmployee;

	employeeRepository.save(employee);
	}catch(error){
		console.error("Erro ao persistir o funcionário " + error);
		return undefined;
	}
}

export { insertEmployee };

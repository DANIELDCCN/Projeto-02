import { AppDataSource } from "../../AppDataSource";
import { Employee } from "../../entities/Employee";

interface IDataEmployee {
    idEmployee?: number;
    nameEmployee: string;
    salaryEmployee: string;
  }

async function deleteEmployee(employee: IDataEmployee){
    try{
    const employeeRepository = AppDataSource.getRepository(Employee);

    const employeeExist = await employeeRepository.findOneBy({
      idEmployee: employee.idEmployee,
    });

    if (employeeExist === null) {
      console.log("Funcionário não existe");
      return null;
    }
    return employeeRepository.delete(employeeExist);
  } catch (error) {
    return undefined;
  }
}

export { deleteEmployee };
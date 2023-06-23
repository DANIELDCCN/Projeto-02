import { AppDataSource } from "../../AppDataSource";
import { Employee } from "../../entities/Employee";

interface IDataEmployee {
  idEmployee?: number;
  nameEmployee: string;
  salaryEmployee: string;
}

async function updateEmployee(employee: IDataEmployee) {
  try {
    const employeeRepository = AppDataSource.getRepository(Employee);

    const employeeExist = await employeeRepository.findOneBy({
      idEmployee: employee.idEmployee,
    });

    if (employeeExist === null) {
      console.log("Funcioário não existe");
      return null;
    }

    employeeExist.nameEmployee = employee.nameEmployee;
    employeeExist.salaryEmployee = employee.salaryEmployee;
    return employeeRepository.save(employeeExist);
  } catch (error) {
    return undefined;
  }
}

export { updateEmployee };

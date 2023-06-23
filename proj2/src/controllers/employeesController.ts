import { Request, Response } from "express";
import { findAllEmployees } from "../usecases/employees/findAllEmployees";
import { insertEmployee } from "../usecases/employees/insertEmployees";
import { updateEmployee as employeeUpdate } from "../usecases/employees/updateEmployees";
import { deleteEmployee as employeeDelete } from "../usecases/employees/deleteEmployees";

interface IDataEmployee {
  idEmployee?: number;
  nameEmployee: string;
  salaryEmployee: string;
}

async function getEmployees(req: Request, res: Response) {
  const employees = await findAllEmployees();

  if (employees) return res.send(employees);

  return res.status(404).send({
    Error: "Unable to find all employees",
    status: 404,
  });
}

async function createEmployee(req: Request, res: Response) {
  const dataEmployee: IDataEmployee = req.body;

  const result = await insertEmployee(dataEmployee);

  if (result) {
    return res.status(201).send("Funcionário criado");
  } else {
    return res.status(404).send({});
  }
}

async function updateEmployee(req: Request, res: Response) {
  const dataEmployee: IDataEmployee = req.body;

  dataEmployee.idEmployee = Number(req.params.id);

  const result = await employeeUpdate(dataEmployee);

  if (result) {
    return res.send("Funcionário atualizado!");
  } else {
    return res.status(404).send("Erro ao atualizar");
  }
}

async function deleteEmployee(req: Request, res: Response) {
  const dataEmployee: IDataEmployee = req.body;

  dataEmployee.idEmployee = Number(req.params.id);;

  const result = await employeeDelete(dataEmployee);

  if (result) {
    return res.send("Funcionário excluido!");
  } else {
    return res.status(404).send("Erro ao excluir");
  }
}

export { getEmployees, createEmployee, updateEmployee, deleteEmployee };

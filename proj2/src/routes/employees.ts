import { Router } from 'express';
import { createEmployee, getEmployees, updateEmployee, deleteEmployee } from '../controllers/employeesController';

const employeesRouter = Router();

employeesRouter.get('/employees', getEmployees);
employeesRouter.post('/employee', createEmployee);
employeesRouter.put('/employee/:id', updateEmployee);
employeesRouter.delete('/employee/:id', deleteEmployee);
//Adicionar as outras rotas posteriormente

export { employeesRouter };
import { Router } from 'express';
import { createClient, getClients, updateClient, deleteClient } from '../controllers/clientController';

const clientsRouter = Router();

clientsRouter.get('/clients', getClients);
clientsRouter.post('/client', createClient);
clientsRouter.put('/client/:id', updateClient);
clientsRouter.delete('/client/:id', deleteClient);
//Adicionar as outras rotas posteriormente

export { clientsRouter };
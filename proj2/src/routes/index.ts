import { Router } from 'express';
import { clientsRouter } from './clients';

const router = Router();

router.use(clientsRouter);

export { router };
import { Router } from 'express';
import controllerGetAllOrders from '../controllers/orders.controller';

const ordersRouter = Router();

ordersRouter.get('/', controllerGetAllOrders);

export default ordersRouter;

import { Router } from 'express';
import { controllerAddOrder, controllerGetAllOrders } from '../controllers/orders.controller';
import addOrderValidation from '../middlewares/addOrderValidation';
import tokenValidation from '../middlewares/tokenValidation';

const ordersRouter = Router();

ordersRouter.get('/', controllerGetAllOrders);
ordersRouter.post('/', tokenValidation, addOrderValidation, controllerAddOrder);
export default ordersRouter;

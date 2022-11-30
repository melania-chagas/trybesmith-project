import { Router } from 'express';
import controllerAddNewProduct from '../controllers/Products.controller';

const productsRouter = Router();

productsRouter.post('/', controllerAddNewProduct);

export default productsRouter;

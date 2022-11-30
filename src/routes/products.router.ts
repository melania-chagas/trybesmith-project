import { Router } from 'express';
import {
  controllerAddNewProduct,
  controllerGetAllProducts,
} from '../controllers/Products.controller';

const productsRouter = Router();

productsRouter.post('/', controllerAddNewProduct);
productsRouter.get('/', controllerGetAllProducts);

export default productsRouter;

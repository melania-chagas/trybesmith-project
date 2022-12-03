import { Router } from 'express';
import {
  controllerAddNewProduct,
  controllerGetAllProducts,
} from '../controllers/products.controller';
import validationProduct from '../middlewares/productsValidation';

const productsRouter = Router();

productsRouter.post('/', validationProduct, controllerAddNewProduct);
productsRouter.get('/', controllerGetAllProducts);

export default productsRouter;

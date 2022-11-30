import { Request, Response } from 'express';
import { serviceAddNewProduct, serviceGetAllProducts } from '../services/ProductsService';
import IProduct from '../IProduct';

const controllerAddNewProduct = async (req: Request, res: Response) => {
  const product = req.body as IProduct;
  const { statusCode, message } = await serviceAddNewProduct(product);
  res.status(statusCode).json(message);
};

const controllerGetAllProducts = async (_req: Request, res: Response) => {
  const { statusCode, message } = await serviceGetAllProducts();
  res.status(statusCode).json(message);
};

export {
  controllerAddNewProduct,
  controllerGetAllProducts,
};
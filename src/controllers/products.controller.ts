import { Request, Response } from 'express';
import { serviceAddNewProduct, serviceGetAllProducts } from '../services/products.service';
import IProduct from '../interfaces/IProduct';

const controllerAddNewProduct = async (req: Request, res: Response) => {
  const product = req.body as IProduct;
  const { statusCode, message } = await serviceAddNewProduct(product);
  return res.status(statusCode).json(message);
};

const controllerGetAllProducts = async (_req: Request, res: Response) => {
  const { statusCode, message } = await serviceGetAllProducts();
  return res.status(statusCode).json(message);
};

export {
  controllerAddNewProduct,
  controllerGetAllProducts,
};
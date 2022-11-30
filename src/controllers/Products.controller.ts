import { Request, Response } from 'express';
import serviceAddNewProduct from '../services/ProductsService';
import IProduct from '../IProduct';

export default async function controllerAddNewProduct(req: Request, res: Response) {
  const product = req.body as IProduct;
  const { statusCode, message } = await serviceAddNewProduct(product);
  res.status(statusCode).json(message);
}

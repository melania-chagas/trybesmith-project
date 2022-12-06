import { Request, Response } from 'express';
import { modelUpdateProducts } from '../models/products.model';

import { serviceAddOrder, serviceGetAllOrders } from '../services/orders.service';

const controllerGetAllOrders = async (_req: Request, res: Response) => {
  const allOrders = await serviceGetAllOrders();
  res.status(200).json(allOrders);
};

const controllerAddOrder = async (req: Request, res: Response): Promise<void> => {
  const { productsIds } = req.body;

  const { user } = req.body;

  const orderId = await serviceAddOrder(user.data.id);
  Promise.all(productsIds.map((productId: number) => modelUpdateProducts(orderId, productId)));

  res.status(201).json({ userId: user.data.id, productsIds });
};

export {
  controllerGetAllOrders,
  controllerAddOrder,
};

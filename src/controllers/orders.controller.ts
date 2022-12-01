import { Request, Response } from 'express';
import serviceGetAllOrders from '../services/orders.service';

const controllerGetAllOrders = async (_req: Request, res: Response) => {
  const allOrders = await serviceGetAllOrders();
  res.status(200).json(allOrders);
};

export default controllerGetAllOrders;
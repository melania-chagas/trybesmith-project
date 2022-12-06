import IOrders from '../interfaces/IOrders';
import { modelAddOrder, modelGetAllOrders } from '../models/orders.model';

const serviceGetAllOrders = async (): Promise<IOrders[]> => {
  const allOrders = await modelGetAllOrders();
  return allOrders;
};

const serviceAddOrder = async (userId: number) => modelAddOrder(userId);

export {
  serviceGetAllOrders,
  serviceAddOrder,
};

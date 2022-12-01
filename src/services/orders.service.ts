import IOrders from '../interfaces/IOrders';
import modelGetAllOrders from '../models/orders.model';

const serviceGetAllOrders = async (): Promise<IOrders[]> => {
  const allOrders = await modelGetAllOrders();
  return allOrders;
};

export default serviceGetAllOrders;
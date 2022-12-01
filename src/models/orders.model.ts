import IOrders from '../interfaces/IOrders';
import connection from './connection';

const modelGetAllOrders = async (): Promise<IOrders[]> => {
  const [allOrders] = await connection.execute(`
  SELECT Orders.id, Orders.userId,
  JSON_ARRAYAGG(Products.id) AS productsIds
  FROM Trybesmith.Orders AS Orders
  INNER JOIN Trybesmith.Products AS Products
  ON Orders.id = Products.orderId
  GROUP BY Orders.id;`);
  return allOrders as IOrders[];
};

export default modelGetAllOrders;
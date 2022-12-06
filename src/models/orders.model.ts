import { ResultSetHeader } from 'mysql2';
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

const modelAddOrder = async (productsId: number) => {
  console.log({ productsId });
  const [{ insertId }] = await connection.execute<ResultSetHeader>(`INSERT INTO Trybesmith.Orders 
  (userId) VALUES (?)`, [productsId]);
  return insertId;
};

export {
  modelGetAllOrders,
  modelAddOrder,
};

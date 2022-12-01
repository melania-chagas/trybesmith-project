import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import IProduct from '../interfaces/IProduct';

const modelAddNewProduct = async (body: IProduct): Promise<IProduct> => {
  const { name, amount } = body;
  const [result] = await connection.execute<ResultSetHeader>(`
  INSERT INTO Trybesmith.Products (name, amount) VALUES (?,?)`, [name, amount]);

  const product: IProduct = { id: result.insertId, name, amount };
  return product;
};

const modelGetAllProducts = async (): Promise<IProduct[]> => {
  const [products] = await connection.execute('SELECT * FROM Trybesmith.Products');
  return products as IProduct[];
};

export {
  modelAddNewProduct,
  modelGetAllProducts,
};

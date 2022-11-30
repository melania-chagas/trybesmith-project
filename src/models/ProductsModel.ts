import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import IProduct from '../IProduct';

const modelAddNewProduct = async (body: IProduct): Promise<IProduct> => {
  const { name, amount } = body;
  const [result] = await connection.execute<ResultSetHeader>(`
  INSERT INTO Trybesmith.Products (name, amount) VALUES (?,?)`, [name, amount]);

  const product: IProduct = { id: result.insertId, name, amount };
  return product;
};

export default modelAddNewProduct;
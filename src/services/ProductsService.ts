import IProduct from '../IProduct';
import modelAddNewProduct from '../models/ProductsModel';

export default async function serviceAddNewProduct(product: IProduct) {
  const created = await modelAddNewProduct(product);
  return { statusCode: 201, message: created };
}

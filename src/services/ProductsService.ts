import IProduct from '../IProduct';
import { modelAddNewProduct, modelGetAllProducts } from '../models/ProductsModel';

const serviceAddNewProduct = async (product: IProduct) => {
  const created = await modelAddNewProduct(product);
  return { statusCode: 201, message: created };
};

const serviceGetAllProducts = async () => {
  const allProducts = await modelGetAllProducts();
  return { statusCode: 200, message: allProducts };
};

export {
  serviceAddNewProduct,
  serviceGetAllProducts,
};

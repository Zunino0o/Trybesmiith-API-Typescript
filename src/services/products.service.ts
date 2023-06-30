import { Optional } from 'sequelize';
import ProductModel, {
  ProductInputtableTypes,
  ProductSequelizeModel,
} from '../database/models/product.model';
import { ServiceResponse } from '../types/ServiceResponse';
import { Product } from '../types/Product';

type ProductWithoutOrderId = Optional<Product, 'orderId'>;

async function registerProduct(
  params: ProductInputtableTypes,
): Promise<ServiceResponse<ProductWithoutOrderId>> {
  const newProduct = await ProductModel.create(params);
  const { id, name, price } = newProduct.dataValues;
  return { status: null, data: { id, name, price } };
}

async function listProducts(): Promise<ServiceResponse<ProductSequelizeModel[]>> {
  const productsList = await ProductModel.findAll();
  return { status: null, data: productsList };
}

export default {
  registerProduct,
  listProducts,
};

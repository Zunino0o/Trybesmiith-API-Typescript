import { Optional } from 'sequelize';
import ProductModel, {
  ProductInputtableTypes,
} from '../database/models/product.model';
import { ServiceResponse } from '../types/ServiceResponse';
import { Product } from '../types/Product';

type OrderWithoutOrderId = Optional<Product, 'orderId'>;

async function registerProduct(
  params: ProductInputtableTypes,
): Promise<ServiceResponse<OrderWithoutOrderId>> {
  const newProduct = await ProductModel.create(params);
  const { id, name, price } = newProduct.dataValues;
  return { status: null, data: { id, name, price } };
}

export default {
  registerProduct,
};

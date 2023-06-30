// import { Order } from 'sequelize';
import OrderModel, {
} from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { CorrectOrderOutput } from '../types/CorrectOrderOutput';
import { ServiceResponse } from '../types/ServiceResponse';

async function listOrders(): Promise<ServiceResponse<CorrectOrderOutput[]>> {
  const ordersList = await OrderModel.findAll({
    include: {
      model: ProductModel,
      as: 'productIds',
      attributes: ['id'],
    },
  });

  const correctOuput = ordersList.map((order) => ({
    id: order.dataValues.id,
    userId: order.dataValues.userId,
    productIds: order.dataValues.productIds?.map((productId) => productId.id),
  }));

  return { status: null, data: correctOuput };
}

export default {
  listOrders,
};

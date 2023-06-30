import { Request, Response } from 'express';
import ordersService from '../services/orders.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function listOrders(_req: Request, res: Response) {
  const { status, data } = await ordersService.listOrders();

  if (status) {
    return res.status(mapStatusHTTP(status)).json(data);
  }

  res.status(200).json(data);
}

export default {
  listOrders,
};

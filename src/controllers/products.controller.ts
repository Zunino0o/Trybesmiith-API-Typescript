import { Request, Response } from 'express';
import productsService from '../services/products.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function registerProduct(req: Request, res: Response) {
  const { status, data } = await productsService.registerProduct(req.body);

  if (status) {
    return res.status(mapStatusHTTP(status)).json(data);
  }

  res.status(201).json(data);
}

async function listProducts(_req: Request, res: Response) {
  const { status, data } = await productsService.listProducts();

  if (status) {
    return res.status(mapStatusHTTP(status)).json(data);
  }

  res.status(200).json(data);
}

export default {
  registerProduct,
  listProducts,
};

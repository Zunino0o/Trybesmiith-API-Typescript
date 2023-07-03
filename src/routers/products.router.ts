import { Router } from 'express';
import productsController from '../controllers/products.controller';
import auth from '../middlewares/product.validations';

const productsRouter = Router();

productsRouter.get('/products', productsController.listProducts);
productsRouter.post(
  '/products',
  auth.validateName,
  auth.validatePrice,
  productsController.registerProduct,
);

export default productsRouter;

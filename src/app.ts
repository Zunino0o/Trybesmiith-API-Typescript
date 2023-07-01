import express, { Request, Response } from 'express';
import productsRouter from './routers/products.router';
import ordersRouter from './routers/orders.router';
import loginRouter from './routers/login.router';

const app = express();

app.use(express.json());
app.use(loginRouter);
app.use(productsRouter);
app.use(ordersRouter);

app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('TrybeSmith is OPEN for business!');
});

export default app;

import express, { Request, Response } from 'express';
import productsRouter from './routers/products.router';

const app = express();

app.use(express.json());
app.use(productsRouter);

app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('TrybeSmith is OPEN for business!');
});

export default app;

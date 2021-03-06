import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';

import { router } from './routes';

const app = express();

app.use(express.json());
app.use(router);
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  return res.json({
    status: "Error",
    message: error.message
  });
});

app.listen(3000, () => console.log('Server is running!'))
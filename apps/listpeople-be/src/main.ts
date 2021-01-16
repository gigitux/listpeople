/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import user from './app/api/user/user';
import { handleErrors } from './app/middleware/handler-errors';

export const app = express();

app.use(express.json());
app.use('/users', user);
app.use((error, req, res, next) => {
  handleErrors(error, req, res);
  next();
});

const port = process.env.port || 3333;
export const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

server.on('error', console.error);

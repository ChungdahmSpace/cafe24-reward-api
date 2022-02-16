import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as compress from 'koa-compress';
import * as cors from '@koa/cors';
import * as helmet from 'koa-helmet';
import * as logger from 'koa-logger';
import * as http from 'http';
import { serverConfig } from './config';
import router from './api';
import errorHandler from './middleware/error.middleware';

const app = new Koa();
const {
  isDevelopment,
  server: { port },
} = serverConfig;

if (isDevelopment) {
  app.use(logger);
}

app
  .use(router.routes())
  .use(router.allowedMethods())
  .use(errorHandler)
  .use(helmet)
  .use(compress)
  .use(cors)
  .use(bodyParser);

http.createServer(app.callback()).listen(port, () => {
  console.log(`🚀 Server listening on port ${port}!`);
});

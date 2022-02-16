import * as Router from 'koa-router';
import { serverConfig } from '../config';

import users from './users';

const router = new Router({
  prefix: `/api/${serverConfig.server.apiVersion}`,
});

router.get('/', ctx => {
  ctx.body = 'test';
});

router.use(users);

export default router;

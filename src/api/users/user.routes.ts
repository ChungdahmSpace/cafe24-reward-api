import * as Router from 'koa-router';

import * as controller from './user.controller';

const router = new Router({
  prefix: `/users`,
});

router.get('/:userId', controller.getOne).get('/', controller.getAll);

export default router.routes();

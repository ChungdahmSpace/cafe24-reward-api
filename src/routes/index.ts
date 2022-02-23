import Router from 'koa-router'
import api from './api'

const routes = new Router()
routes.use('/api', api.routes())

routes.get('/', async ctx => {
  ctx.body = {
    message: '',
    ips: ctx.state.ipaddr,
  }
})

routes.post('/test', async ctx => {
  console.log('ctx.request.body', ctx.request.body)
  ctx.body = {
    test: '',
  }
})

export default routes

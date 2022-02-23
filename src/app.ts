import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import compress from 'koa-compress'
import cors from '@koa/cors'
import helmet from 'koa-helmet'
import logger from 'koa-logger'
import http from 'http'
import routes from './routes'

const app = new Koa()

// if (isDevelopment) {
//   app.use(logger)
// }

const port = 3000

app
  .use(compress())
  .use(bodyParser())
  .use(routes.routes())
  .use(helmet)
  .use(cors)

http.createServer(app.callback()).listen(port, () => {
  console.log(`🚀 Server listening on port ${port}!`)
})

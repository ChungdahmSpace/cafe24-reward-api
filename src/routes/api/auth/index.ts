import Router from 'koa-router'
import { postAuth } from './auth.ctrl'

const auth = new Router()

auth.post('/', postAuth)

export default auth

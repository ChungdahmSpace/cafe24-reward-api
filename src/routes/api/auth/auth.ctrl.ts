import { Middleware } from 'koa'
import requestAccessToken from '../../../lib/cafe24/requsetAccessToken'

export const postAuth: Middleware = async ctx => {
  type RequestBody = {
    code: string
    mall_id: string
  }

  const { code, mall_id }: RequestBody = ctx.request.body

  try {
    const accessToken = await requestAccessToken(mall_id, code)
    ctx.body = {
      accessToken,
    }
  } catch (error) {
    ctx.status = 401
    ctx.body = error.response.data
    return
  }
}

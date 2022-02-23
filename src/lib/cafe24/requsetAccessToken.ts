import axios from 'axios'
import qs from 'qs'
import { cafe24Config } from '../../config'

const CLIENT_ID = cafe24Config.CLIENT_ID
const SECRET_KEY = cafe24Config.SECRET_KEY

type GetAccessTokenResponseData = {
  access_token: string
  expires_at: string
  refresh_token: string
  refresh_token_expires_at: string
  client_id: string
  mall_id: string
  user_id: string
  issued_at: string
}

export default async function requestAccessToken(mallID: string, code: string): Promise<string> {
  const authorization = 'Basic ' + Buffer.from(`${CLIENT_ID}:${SECRET_KEY}`).toString('base64')

  const response = await axios({
    method: 'post',
    url: `https://${mallID}.cafe24api.com/api/v2/oauth/token`,
    headers: {
      Authorization: authorization,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: qs.stringify({
      grant_type: 'authorization_code',
      redirect_uri: 'https://reward.app/admin/callback',
      code: code,
    }),
  })
  const { access_token }: GetAccessTokenResponseData = response.data

  return access_token
}

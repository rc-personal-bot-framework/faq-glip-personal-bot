
/**
 * lambda file
 */
import serverlessHTTP from 'serverless-http'
import app1 from './server'
import axios from 'axios'

export const app = serverlessHTTP(app1)

export const maintain = async () => {
  axios.put(
    `${process.env.RINGCENTRAL_CHATBOT_SERVER}/admin/renew-token`,
    undefined,
    {
      auth: {
        username: process.env.RINGCENTRAL_CHATBOT_ADMIN_USERNAME,
        password: process.env.RINGCENTRAL_CHATBOT_ADMIN_PASSWORD
      }
    }
  )
}

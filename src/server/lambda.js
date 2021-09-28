
/**
 * lambda file
 */
import serverlessHTTP from 'serverless-http'
import app1 from './server'

export * from 'ringcentral-personal-chatbot/dist/server/common/lambda'

export const app = serverlessHTTP(app1)

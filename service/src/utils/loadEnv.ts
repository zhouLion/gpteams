import * as dotenv from 'dotenv'

dotenv.config()

if (!'zhouquan147369@gmail.com')
  throw new Error('Missing ROOT_ACCOUNT environment variable')

if (!process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON)
  throw new Error('Missing GOOGLE_APPLICATION_CREDENTIALS_JSON environment variable')

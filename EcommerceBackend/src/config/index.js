import dotenv from 'dotenv'
import { join } from 'path'

dotenv.config({ path: join(process.cwd(), '.env') })

const config = {
  port: process.env.PORT,
  databaseurl: process.env.DATABASE_URL,
  environment: process.env.ENVIRONMENT,
  secretKey: process.env.JWT_SECRET,
  expireTime: process.env.JWT_EXPIRE_TIME,
  acctoken: process.env.ACC_TOKEN,
  reftoken: process.env.REF_TOKEN,
  filepath: join(process.cwd(), 'public'),
}

export default config

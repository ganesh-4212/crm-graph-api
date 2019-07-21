import { config as dotEnvConfig } from 'dotenv'
dotEnvConfig()
export const config = {
  dbURL: process.env.DB_URL
}

import * as dotenv from 'dotenv'
dotenv.config();
const {
  MONGO_DB_URL
} = process.env;
export const config = {
  dbURL: MONGO_DB_URL
}

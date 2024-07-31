import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pkg;

export default new Pool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_ROLE,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PW,
  port: Number(process.env.DATABASE_PORT),
});

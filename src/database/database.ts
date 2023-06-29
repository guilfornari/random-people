import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pg;

const connection = new Pool({
    host: process.env.DB_HOST || "localhost",
    port: 5432,
    user: process.env.DB_USER || "guil",
    password: process.env.DB_PASSWORD || "pgyrfalcon",
    database: process.env.DB_DATABASE || "people"
});

export default connection;
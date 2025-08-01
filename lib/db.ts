import { Pool } from "pg";

const pool = new Pool({
    connectionString: process.env.DATABASE_URI!,
    ssl: {
        rejectUnauthorized: false,
    }
})

export default pool;
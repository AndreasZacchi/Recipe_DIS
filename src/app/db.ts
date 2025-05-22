import postgres from "postgres";

const db = postgres({
  host: "localhost",
  port: 5432,
  database: "postgres",
  username: "andreaszacchi",
  password: "admin",
});

// const db = postgres({
//   host: process.env.DB_HOST,
//   port: Number(process.env.DB_PORT),
//   database: process.env.DB_NAME,
//   username: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
// });

export default db;

const mysql = require("mysql2");
require("dotenv").config();
const dataBase = mysql.createConnection({
  user: process.env.DATABASE_USER,
  host: process.env.DATABASE_HOST,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});

dataBase.connect((error) => {
  if (error) throw error;
  console.log("dataBase connected sucessfuly");
});

module.exports = dataBase;

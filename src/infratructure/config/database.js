require("dotenv").config({ path: __dirname + "/.env" });

const db = process.env.DATABASE_STORAGE;
const { Sequelize } = require("sequelize");
const path = require("path");
const storage =
  process.env.DATABASE_STORAGE ||
  path.join(__dirname, `../../../${db}`);

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage,
  logging: false,
});

module.exports = { sequelize };

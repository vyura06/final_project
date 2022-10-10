const { host, user, pass, dbname, port } = require("./db.constants");
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(dbname, user, pass, {
  host,
  port,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    }
  }
});
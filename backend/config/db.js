//sets up and configures a connection to a SQLite database using Sequelize
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "books.db",
});

module.exports = sequelize;

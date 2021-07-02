const Sequelize = require("sequelize");

const { dbHost, dbName, dbUser, dbPwd, dbPort } = require("../config/settings");

const con = new Sequelize(dbName, dbUser, dbPwd, {
  host: dbHost,
  dialect: "postgresql",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  pool: {
    max: 5,
    min: 0,
    require: 30000,
    idle: 10000,
  },
  loggin: false,
});

module.exports = {
  con,
};

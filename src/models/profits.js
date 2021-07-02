const Sequelize = require("sequelize");

const { con } = require("../db/connect");

const profitsModel = con.define(
  "profits",
  {
    idpro: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    profitsname: {
      type: Sequelize.TEXT,
    },
    statepro: {
      type: Sequelize.BOOLEAN,
    },
  },
  { timestamps: false, freezeTableName: true }
);

module.exports = { profitsModel };

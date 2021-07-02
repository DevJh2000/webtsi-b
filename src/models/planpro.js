const Sequelize = require("sequelize");

const { con } = require("../db/connect");
const { planModel } = require("./plan");

const planPro = con.define(
  "planpro",
  {
    idplanpro: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idplan: {
      type: Sequelize.INTEGER,
    },
    idpro: {
      type: Sequelize.INTEGER,
    },
  },
  { timestamps: false, freezeTableName: true }
);

module.exports = { planPro };

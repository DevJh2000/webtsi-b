const Sequelize = require("sequelize");
const { con } = require("../db/connect");
// const { planPro } = require("./planpro");

// const { rateModel } = require("./rates");

const planModel = con.define(
  "plans",
  {
    idplan: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    planname: {
      type: Sequelize.TEXT,
    },
    price: {
      type: Sequelize.DECIMAL,
    },
    typplan: {
      type: Sequelize.TEXT,
    },
  },
  { timestamps: false, freezeTableName: true }
);

module.exports = { planModel };

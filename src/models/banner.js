const Sequelize = require("sequelize");

const { con } = require("../db/connect");

const bannerModel = con.define(
  "banner",
  {
    idbanner: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    textheader: {
      type: Sequelize.TEXT,
    },
    textbody: {
      type: Sequelize.TEXT,
    },
    textfooter: {
      type: Sequelize.TEXT,
    },
    imgback: {
      type: Sequelize.TEXT,
    },
  },
  { timestamps: false, freezeTableName: true }
);

module.exports = { bannerModel };

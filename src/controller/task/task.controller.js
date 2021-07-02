const { planPro } = require("../../models/planpro");
const { planModel } = require("../../models/plan");
const { profitsModel } = require("../../models/profits");

//Listar todos datos
exports.listShowProfits = async (req, res) => {
  const { typplan } = req.params;

  try {
    const listPlan = await planModel.findAll({
      where: {
        typplan: typplan,
      },
    });
    const data = Promise.all(
      listPlan.map((data) => {
        return new Promise(async (resolve, reject) => {
          const consulplanpro = await planPro.findAll({
            where: { idplan: data.dataValues.idplan },
          });
          const cosulplanname = await planModel.findAll({
            atributes: ["planname", "price"],
            where: { idplan: data.dataValues.idplan },
          });
          const profits = await Promise.all(
            consulplanpro.map((data) => {
              return new Promise(async (resolve, reject) => {
                const cosulprofitsname = await profitsModel.findAll({
                  atributes: ["idpro", "profitsname"],
                  where: { idpro: data.dataValues.idpro },
                });
                return resolve(cosulprofitsname[0]);
              });
            })
          );

          if (consulplanpro === null) {
            return reject(":c");
          } else {
            resolve({
              planNames: cosulplanname,
              profits: profits,
            });
          }
        });
      })
    );

    data
      .then((params) => {
        return res.status(200).json(params);
      })
      .catch((e) => {
        console.log(e);
      });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ message: "Error Server, check the controller" });
  }
};

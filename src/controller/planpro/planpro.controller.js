const { planPro } = require("../../models/planpro");
const { checkProfit } = require("../porfits/profits.controller");
const { checkPlan } = require("../plans/plans.controller");

//Crear un dato
exports.createPlanPro = async (req, res) => {
  const { body } = req;

  try {
    const newdata = new planPro(body);

    //Consultamos que la llave foranea exista
    const validForingKeypro = await checkProfit({ params: body.idpro });

    const validForingKeyplan = await checkPlan({ params: body.idplan });

    if (validForingKeyplan.status & validForingKeypro.status) {
      const create = await newdata.save();
      return res.status(200).json(create);
    } else {
      return res.status(500).json({ message: "the foreing key not exists." });
    }
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ message: "Error Server, check the controller" });
  }
};

//Listar todos datos
exports.listPlanPro = async (req, res) => {
  try {
    const list = await planPro.findAll();

    return res.status(200).json(list);
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ message: "Error Server, check the controller" });
  }
};

//Actualizar dato
exports.updatePlanPro = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  try {
    //Consultamos que el dato exista
    const validId = await planPro.findOne({
      where: {
        idplanpro: id,
      },
    });

    if (validId) {
      //Consultamos que la llave foranea exista
      const validForingKeypro = await checkProfit({ params: body.idpro });

      const validForingKeyplan = await checkPlan({ params: body.idplan });

      if (validForingKeyplan.status & validForingKeypro.status) {
        const findDat = await planPro.findByPk(id);

        findDat.update(body);

        return res.status(200).json(findDat);
      } else {
        return res.status(500).json({ message: "the foreing key not exists." });
      }
    } else {
      return res.status(404).json({ message: "El dato no existe." });
    }
  } catch (e) {
    console.log(e);

    return res
      .status(500)
      .json({ message: "Error Server, check the controller" });
  }
};

//Eliminar Dato
exports.deletePlanPro = async (req, res) => {
  const { id } = req.params;

  try {
    const validId = await planPro.findOne({
      where: {
        idplanpro: id,
      },
    });

    if (validId) {
      const findDat = await planPro.findByPk(id);
      findDat.destroy();

      return res.status(200).json(findDat);
    } else {
      return res.status(500).json({ message: "El dato no existe." });
    }
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ message: "Error Server, check the controller" });
  }
};

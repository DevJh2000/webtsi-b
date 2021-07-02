const { planModel } = require("../../models/plan");

//Crear un nuevo dato
exports.createPlan = async (req, res) => {
  const { body } = req;

  try {
    const newdata = new planModel(body);

    const create = await newdata.save();

    return res.status(200).json(create);
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ message: "Error Server, check the controller" });
  }
};

//Listar todos datos
exports.listPlan = async (req, res) => {
  try {
    const list = await planModel.findAll();

    return res.status(200).json(list);
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ message: "Error Server, check the controller" });
  }
};

//verificar que exista un dato(uso en controladores que requieran este dato)
exports.checkPlan = async (req, res) => {
  const id = req.params;

  try {
    const list = await planModel.findByPk(id);

    if (list != null) {
      return { status: true };
    } else {
      return { status: false };
    }
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ status: false, message: "Error Server, check the controller" });
  }
};

//Actualizar dato
exports.updatePlan = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  try {
    //Consultamos que el dato exista
    const validId = await planModel.findOne({
      where: {
        idplan: id,
      },
    });

    if (validId) {
      const findDat = await planModel.findByPk(id);

      findDat.update(body);

      return res.status(200).json(findDat);
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
exports.deletePlan = async (req, res) => {
  const { id } = req.params;

  try {
    const validId = await planModel.findOne({
      where: {
        idplan: id,
      },
    });

    if (validId) {
      const findDat = await planModel.findByPk(id);
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

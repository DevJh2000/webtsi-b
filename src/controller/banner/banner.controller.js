const { bannerModel } = require("../../models/banner");

// Crear un  dato
exports.createBanner = async (req, res) => {
  const { body } = req;

  try {
    const newdata = new bannerModel(body);

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
exports.listBanner = async (req, res) => {
  try {
    const list = await bannerModel.findAll();

    return res.status(200).json(list);
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ message: "Error Server, check the controller" });
  }
};

//Actualizar dato
exports.updateBanner = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  try {
    //Consultamos que el dato exista
    const validId = await bannerModel.findOne({
      where: {
        idbanner: id,
      },
    });

    if (validId) {
      const findDat = await bannerModel.findByPk(id);
      findDat.update(body);

      if (findDat) {
        return res.status(200).json(findDat);
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
exports.deleteBanner = async (req, res) => {
  const { id } = req.params;

  try {
    const validId = await bannerModel.findOne({
      where: {
        idbanner: id,
      },
    });

    if (validId) {
      const findDat = await bannerModel.findByPk(id);
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

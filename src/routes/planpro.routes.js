const { Router } = require("express");
const planpro = require("../controller/planpro/planpro.controller");

const router = Router();

router.post("/planpro/new", planpro.createPlanPro);
router.get("/planpro/list", planpro.listPlanPro);
router.put("/planpro/update/:id", planpro.updatePlanPro);
router.delete("/planpro/delete/:id", planpro.deletePlanPro);

module.exports = router;

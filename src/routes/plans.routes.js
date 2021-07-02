const { Router } = require("express");
const plans = require("../controller/plans/plans.controller");

const router = Router();

router.post("/plans/new", plans.createPlan);
router.get("/plans/list", plans.listPlan);
router.put("/plans/update/:id", plans.updatePlan);
router.delete("/plans/delete/:id", plans.deletePlan);

module.exports = router;

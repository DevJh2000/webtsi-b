const { Router } = require("express");
const profits = require("../controller/porfits/profits.controller");

const router = Router();

router.post("/profits/new", profits.createProfit);
router.get("/profits/list", profits.listProfit);
router.put("/profits/update/:id", profits.updateProfit);
router.delete("/profits/delete/:id", profits.deleteProfit);

module.exports = router;

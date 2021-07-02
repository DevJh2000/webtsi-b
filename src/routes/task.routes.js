const { Router } = require("express");
const task = require("../controller/task/task.controller");

const router = Router();

router.get("/task/list/:typplan", task.listShowProfits);

module.exports = router;

const { Router } = require("express");
const banner = require("../controller/banner/banner.controller");

const router = Router();

router.post("/banner/new", banner.createBanner);
router.get("/banner/list", banner.listBanner);
router.put("/banner/update/:id", banner.updateBanner);
router.delete("/banner/delete/:id", banner.deleteBanner);

module.exports = router;

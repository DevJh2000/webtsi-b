const { Router } = require("express");
const email = require("../controller/sendEmail/sendEmail.controller");
const router = Router();
router.post("/sendEmail/email", email.sendEmail);
module.exports = router;

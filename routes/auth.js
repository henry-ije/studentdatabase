var express = require("express")
var router = express.Router();
const {authController} = require("../controllers/auth")

//sign up
router.post("/signup", authController.signup)

router.post("/signin", authController.sign)

module.exports = router;

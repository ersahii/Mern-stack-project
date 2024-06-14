const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth-controllers")
router.route("/").get(authControllers.home);
router.route("/register").get(authControllers.register);
module.exports = router;
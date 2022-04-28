const express = require("express");
const router = express.Router();
const { signup, login, logout, requireLogin } = require("../controllers/auth");
const { userSignupValidator } = require("../validator");

router.post("/signup", userSignupValidator, signup);
router.post("/login", login);
router.get("/logout", logout);


module.exports = router;
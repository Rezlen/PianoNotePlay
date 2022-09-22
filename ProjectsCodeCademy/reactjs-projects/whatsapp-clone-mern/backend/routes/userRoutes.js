// connection between the routes and the DB/users.
const express = require("express");
const { registerUser } = require("../controllers/userControllers");

const router = express.Router();

// these are controllers which must have their own folders & files
router.route("/").post(registerUser);
// router.post("/login", (authUser)

module.exports = router;
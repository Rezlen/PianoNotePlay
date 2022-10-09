// connection between the routes and the DB/users.
const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// these are controllers which must have their own folders & files
router.route("/").get(protect, );
router.route("/").post(registerUser).get(allUsers);
router.post("/login", authUser);

module.exports = router;
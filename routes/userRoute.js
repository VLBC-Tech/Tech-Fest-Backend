const express = require("express");
const { createUser } = require("../controller/userController");
const { login, logout, protect } = require("../controller/authController");
const { getMe, getUser, getUsers } = require("../controller/userController");
const userModel = require("../model/userModel");
// const y = async () => {
//   const t = await bcrypt.hash("gLAkv3s6esM7gA3", 12);

//   console.log({ t });
// };

// y();

const router = express.Router();

router.route("/").get(getUsers).post(createUser);
router.post("/login", login);
router.get("/logout", logout);

router.use(protect);

router.get("/me", getMe, getUser);
// router.get("/users", getUsers);

module.exports = router;

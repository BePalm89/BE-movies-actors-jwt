const express = require("express");
const { isAuth, isAdmin } = require("../../middleware/auth.middleware");
const {
  getAllUsers,
  getUserById,
  getUsersByRole,
  updateUser,
  deleteUser,
  registerUser,
  login,
  logout
} = require("../controllers/users.controller");

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.get("/role/:role", getUsersByRole);
router.put("/:id", [isAdmin], updateUser);
router.delete("/:id",[isAdmin], deleteUser);
router.post("/register", [isAdmin], registerUser);
router.post("/login", login);
router.post("/logout", [isAuth] ,logout);

module.exports = router;

const express = require("express");
const { isAdmin } = require("../../middleware/auth.middleware");
const {
  getAllActors,
  getActorById,
  createActor,
  updateActor,
  deleteActor,
} = require("../controllers/actors.controller");

const router = express.Router();

router.get("/", getAllActors);
router.get("/:id", getActorById);
router.post("/create", [isAdmin] , createActor);
router.put("/:id", [isAdmin] , updateActor);
router.delete("/:id", [isAdmin] , deleteActor);

module.exports = router;

const express = require("express");
const { isAdmin } = require("../../middleware/auth.middleware");
const {
  getAllMovies,
  getMovieById,
  createNewMovie,
  updateMovie,
  deleteMovie,
} = require("../controllers/movies.controller");

const router = express.Router();

router.get("/", getAllMovies);
router.get("/:id", getMovieById);
router.post("/create", [ isAdmin ], createNewMovie);
router.put("/:id", [ isAdmin ], updateMovie);
router.delete("/:id", [ isAdmin ], deleteMovie);

module.exports = router;

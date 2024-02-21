const Movie = require("../models/Movie");

const getAllMovies = async (req, res, next) => {
  try {
    const movies = await Movie.find();
    return res.status(200).json(movies);
  } catch (error) {
    return next(error);
  }
};

const getMovieById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findById(id);
    return res.status(200).json(movie);
  } catch (error) {
    return next(error);
  }
};

const createNewMovie = async (req, res, next) => {
  try {
    const newMovie = new Movie({
      title: req.body.title,
      yearOfRelease: req.body.yearOfRelease,
      director: req.body.director,
      genre: req.body.genre,
    });
    const createdMovie = await newMovie.save();
    return res.status(201).json(createdMovie);
  } catch (error) {
    return next(error);
  }
};

const updateMovie = async (req, res, next) => {
  try {
    const { id } = req.params;
    const modifiedMovie = new Movie(req.body);
    modifiedMovie._id = id;
    const updatedMovie = await Movie.findByIdAndUpdate(id, modifiedMovie, {
      new: true,
    });
    return res.status(200).json(updatedMovie);
  } catch (error) {
    return next(error);
  }
};

const deleteMovie = async (req, res, next) => {
  try {
      const { id } = req.params;
      await Movie.findByIdAndDelete(id);
      return res.status(200).json('Movie successfull deleted');
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getAllMovies,
  getMovieById,
  createNewMovie,
  updateMovie,
  deleteMovie,
};

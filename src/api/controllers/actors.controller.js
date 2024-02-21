const Actor = require("../models/Actor");

const getAllActors = async (req, res, next) => {
  try {
    const actors = await Actor.find();
    return res.status(200).json(actors);
  } catch (error) {
    return next(error);
  }
};

const getActorById = async (req, res, next) => {
  try {
      const { id } = req.params;
      const actor = await Actor.findById(id);
      return res.status(200).json(actor);
  } catch (error) {
    return next(error);
  }
};

const createActor = async ( req, res, next ) =>  {
    try {
        const newActor = new Actor({
            name: req.body.name,
            surname: req.body.surname,
            yearOfBirth: req.body.yearOfBirth,
            nationality: req.body.nationality,
            movies: req.body.movies,
        });
        const createdActor = await newActor.save();
        return res.status(201).json(createdActor);
    } catch (error) {
        return next(error);
    }
}

const updateActor = async ( req, res, next ) => {
    try {
        const { id } = req.params;
        const modifedActor = new Actor(req.body);
        modifedActor._id = id;
        const updatedActor = await Actor.findByIdAndUpdate(id, modifedActor, { new: true });
        return res.status(200).json(updatedActor);
    } catch (error) {
        return next(error);
    }
}

const deleteActor = async ( req, res, next ) => {
    try {
        const { id } = req.params;
        await Actor.findByIdAndDelete(id);
        return res.status(200).json("Actor successfull deleted");
    } catch (error) {
        return next(error);
    }
}

module.exports = {
  getAllActors,
  getActorById,
  createActor,
  updateActor,
  deleteActor
};

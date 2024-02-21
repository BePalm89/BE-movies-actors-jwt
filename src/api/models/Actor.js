const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const actorSchema = new Schema(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    yearOfBirth: { type: Date, required: true },
    nationality: { type: String, required: true },
    movies: [{ type: mongoose.Types.ObjectId, ref: "Movie" }],
  },
  { timestamps: true }
);

const Actor = mongoose.model('Actor', actorSchema);
module.exports = Actor;
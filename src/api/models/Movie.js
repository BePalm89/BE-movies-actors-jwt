const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  {
    title: { type: String, require: true },
    yearOfRelease: { type: Number },
    director: { type: String, requre: true },
    genre: {
      type: String,
      required: true,
      enum: [
        "Action",
        "Adventure",
        "Biography",
        "Comedy",
        "Crime",
        "Drama",
        "Fantasy",
        "Horror",
        "Mystery",
        "Romance",
        "Sci-Fi",
        "Thriller",
        "War",
        "Western",
      ],
    },
  },
  { timestamps: true }
);

const Movie = mongoose.model("movie", MovieSchema);
module.exports = Movie;

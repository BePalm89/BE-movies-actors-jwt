const mongoose = require("mongoose");
const Movie = require("../api/models/Movie");

const MOVIES = [
  {
    title: "Inception",
    yearOfRelease: 2010,
    director: "Christopher Nolan",
    genre: "Sci-Fi",
  },
  {
    title: "The Godfather",
    yearOfRelease: 1972,
    director: "Francis Ford Coppola",
    genre: "Crime",
  },
  {
    title: "Pulp Fiction",
    yearOfRelease: 1994,
    director: "Quentin Tarantino",
    genre: "Crime",
  },
  {
    title: "The Shawshank Redemption",
    yearOfRelease: 1994,
    director: "Frank Darabont",
    genre: "Drama",
  },
  {
    title: "The Dark Knight",
    yearOfRelease: 2008,
    director: "Christopher Nolan",
    genre: "Action",
  },
  {
    title: "Forrest Gump",
    yearOfRelease: 1994,
    director: "Robert Zemeckis",
    genre: "Drama",
  },
  {
    title: "Schindler's List",
    yearOfRelease: 1993,
    director: "Steven Spielberg",
    genre: "Biography",
  },
  {
    title: "Fight Club",
    yearOfRelease: 1999,
    director: "David Fincher",
    genre: "Drama",
  },
  {
    title: "The Matrix",
    yearOfRelease: 1999,
    director: "The Wachowskis",
    genre: "Action",
  },
  {
    title: "Inglourious Basterds",
    yearOfRelease: 2009,
    director: "Quentin Tarantino",
    genre: "War",
  },
];

const movieDocuments = MOVIES.map((movie) => new Movie(movie));

mongoose
  .connect(
    "mongodb+srv://bePalmBooks:yRcO65YqJ615wTT1@cluster0.lnyn7dg.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(async () => {
    const allMovies = await Movie.find();

    if (allMovies.length) {
      await Movie.collection.drop();
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
    await Movie.insertMany(movieDocuments);
  })
  .catch((err) => console.log(`Error creating data: ${err}`))
  .finally(() => mongoose.disconnect());

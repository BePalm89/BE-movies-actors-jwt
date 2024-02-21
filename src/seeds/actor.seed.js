const mongoose = require("mongoose");
const Actor = require("../api/models/Actor");

const ACTORS = [
  {
    name: "Leonardo",
    surname: "DiCaprio",
    yearOfBirth: 1974,
    nationality: "American",
    movies: [],
  },
  {
    name: "Al",
    surname: "Pacino",
    yearOfBirth: 1940,
    nationality: "American",
    movies: [],
  },
  {
    name: "John",
    surname: "Travolta",
    yearOfBirth: 1954,
    nationality: "American",
    movies: [],
  },
  {
    name: "Tom",
    surname: "Hanks",
    yearOfBirth: 1956,
    nationality: "American",
    movies: [],
  },
  {
    name: "Morgan",
    surname: "Freeman",
    yearOfBirth: 1937,
    nationality: "American",
    movies: [],
  },
  {
    name: "Brad",
    surname: "Pitt",
    yearOfBirth: 1963,
    nationality: "American",
    movies: [],
  },
  {
    name: "Robert",
    surname: "De Niro",
    yearOfBirth: 1943,
    nationality: "American",
    movies: [],
  },
  {
    name: "Matt",
    surname: "Damon",
    yearOfBirth: 1970,
    nationality: "American",
    movies: [],
  },
  {
    name: "Denzel",
    surname: "Washington",
    yearOfBirth: 1954,
    nationality: "American",
    movies: [],
  },
  {
    name: "Natalie",
    surname: "Portman",
    yearOfBirth: 1981,
    nationality: "American",
    movies: [],
  },
];

const actorDocuments = ACTORS.map((actor) => new Actor(actor));

mongoose
  .connect(
    "mongodb+srv://bePalmBooks:yRcO65YqJ615wTT1@cluster0.lnyn7dg.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(async () => {
    const allActors = await Actor.find();

    if (allActors.length) {
      await Actor.collection.drop();
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
    await Actor.insertMany(actorDocuments);
  })
  .catch((err) => console.log(`Error creating data: ${err}`))
  .finally(() => mongoose.disconnect());
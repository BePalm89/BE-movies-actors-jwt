# BE-movies-actors-jwt

In this BE project, I create an Express server, that is connected with MongoDB through mongoose. There are three different model, `Actor`, `User` and `Movie`

### User model:

```javascript
 {
    email: { type: String, required: true },
    userName: { type: String, required: true },
    password: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    role: { type: String, required: true, enum: [ 'admin', 'user'] },
    profileImg: { type: String }
 }
```
### Actor model:

```javascript
 {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    yearOfBirth: { type: Date, required: true },
    nationality: { type: String, required: true },
    movies: [{ type: mongoose.Types.ObjectId, ref: "Movie" }],
  }
```
### Movie model:

```javascript
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
```
### Acceptance criteria:

- [x] The server starts on a local port when launching the npm run start command.
- [x] The server connects to a MongoAtlas database.
- [x] Implement the authentication with jwt
- [x] Using bcript for encoding the passwords
- [x] Implement a CRUD for the users
- [x] Implement a middleware for authentication
- [x] Implement a util to validate and generate the token
- [x] Implement an other middleware to differentiate the user by the role
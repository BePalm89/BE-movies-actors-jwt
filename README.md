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
    profileImg: { type: String },
    favoriteMovies: [{ type: mongoose.Types.ObjectId, ref: 'Movie'}]
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

### Users endpoints

| Endpoint            | Method | Description                                 | Request body                        | Response                              | Middleware |
|---------------------|--------|---------------------------------------------|-------------------------------------|---------------------------------------|------------|
| `/users`            | GET    | Retrieves a list of all users               |                                     | 200 OK with an array of user          |            |
| `/users/:id`        | GET    | Retrieve a particular user by the ID        |                                     | 200 OK with the user object           |            |
| `/users/role/:role` | GET    | Retrive users filtered by their role        |                                     | 200 OK with an array of user object   |            |
| `/users/:id`        | PUT    | Updates an exisitng user's information      | User object with update info        | 200 OK with the updated user object   | isAdmin    |
| `/users/:id`        | DELETE | Deletes a user by their unique ID           |                                     | 200 OK with a success message         | isAdmin    |
| `/users/register`   | POST   | Register a new user                         | User Object with registration info  | 200 OK with the reistered user's name | isAdmin    |
| `/users/login`      | POST   | Authenticate a user and generates a token   | User object with email and password | 200 OK with a token or 400 if fails   |            |
| `/user/logout`      | POST   | Logs out the user by invalidating the token |                                     | 201 Created with 201 with null token  | isAuth     |

### Movies endpoints

| Endpoint         | Method | Description                        | Request body                     | Response                               | Middleware |
|------------------|--------|------------------------------------|----------------------------------|----------------------------------------|------------|
| `/movies`        | GET    | Retrieves a list of all movies.    |                                  | 200 OK with an array of movie objects. |            |
| `/movies/:id`    | GET    | Retrieves a movie by its unique ID |                                  | 200 OK with the movie object           |            |
| `/movies/create` | POST   | Create a new movie                 | Movie object with necessary info | 201 with the new movie                 | isAdmin    |
| `/movies/:id`    | PUT    | Updates an exisitng movie's info   | Movie object with updated info   | 200 OK with the updated movie object   | isAdmin    |
| `/movies/:id`    | DELETE | Delete a movie by its unique id    |                                  | 200 OK with a success message          | isAdmin    |

### Actors endpoints

| Endpoint         | Method | Description                           | Request body                     | Respose                              | Middleware |
|------------------|--------|---------------------------------------|----------------------------------|--------------------------------------|------------|
| `/actors`        | GET    | Retrieve a list of all actors         |                                  | 200 OK with an array of actor object |            |
| `/actors/:id`    | GET    | Retrieves an actor by their unique ID |                                  | 200 OK with the actor object         |            |
| `/actors/create` | POST   | Create a new actor                    | Actor object with necessary info | 201 OK with the new actor            | isAdmin    |
| `/actors/:id`    | PUT    | Updates an existing actor's info      | Actor object with updated info   | 200 OK with the updated actor object | isAdmin    |
| `/actors/:id`    | DELETE | Deletes an actor by their unique ID   |                                  | 200 OK wit a success message         | isAdmin    |
### Acceptance criteria:

- [x] The server starts on a local port when launching the npm run start command.
- [x] The server connects to a MongoAtlas database.
- [x] Implement the authentication with jwt
- [x] Using bcript for encoding the passwords
- [x] Implement a CRUD for the users
- [x] Implement a middleware for authentication
- [x] Implement a util to validate and generate the token
- [x] Implement an other middleware to differentiate the user by the role
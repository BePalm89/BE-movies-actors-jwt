const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    userName: { type: String, required: true },
    password: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    role: { type: String, required: true, enum: [ 'admin', 'user'] },
    profileImg: { type: String },
    favoriteMovies: [{ type: mongoose.Types.ObjectId, ref: 'Movie'}]
  },
  { timestamps: true }
);

userSchema.pre("save", async function ( next ) {
  try {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (error) {
    next(error);
  }
})

const User = mongoose.model("user", userSchema);

module.exports = User;
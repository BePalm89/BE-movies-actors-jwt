const { verifyToken } = require("../utils/token");
const User = require("../api/models/User");
require("dotenv").config();

const isAuth = async (req, res, next) => {
  const token = req.headers.authorization?.replace("Bearer ", "");

  if (!token) return next(new Error("Unauthorized"));

  try {
    const decoded = verifyToken(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    next();
  } catch (error) {
    next(error);
  }
};

const isAdmin = async (req, res, next) => {
  const token = req.headers.authorization?.replace("Bearer ", "");
  if (!token) return next(new Error("Unauthorized"));

  try {
      const { id } = verifyToken(token);
      const user = await User.findById(id);
      
      if( user.role === 'admin' ) {
          user.password = null;
          req.user = user;
          next();
      } else {
          return res.status(403).json("The user is not authorized");
      }

  } catch (error) {
    next(error);
  }
};

module.exports = { isAuth, isAdmin };

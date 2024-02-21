const User = require("../models/User");
const bcript = require('bcrypt');
const { generateToken } = require("../../utils/token");

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    return next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    return res.status(200).json(user);
  } catch (error) {
    return next(error);
  }
};

const getUsersByRole = async (req, res, next) => {
  try {
    const { role } = req.params;
    const userByRole = await User.find({ role: role });
    return res.status(200).json(userByRole);
  } catch (error) {
    return next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
      const { id } = req.params;
      const modifiedUser = new User( req.body );
      modifiedUser._id = id;
      const updatedUser = await User.findByIdAndUpdate(id, modifiedUser, { new: true});
      return res.status(200).json(updatedUser);
  } catch (error) {
    return next(error); 
  }
};

const deleteUser = async ( req, res, next ) => {
    try {
        const { id } = req.params;
        await User.findByIdAndDelete(id);
        return res.status(200).json("User successfull deleted");
    } catch (error) {
        return next(error);  
    }
}

const registerUser = async ( req, res, next ) => {
  try {
    const newUser = new User(req.body);
    const userExist = await User.findOne({ email: newUser.email });
    if(userExist) return next(new Error('User already existis'));
    
    const userDB = await newUser.save();
    return res.status(200).json(userDB.userName);
  } catch (error) {
    return next(error);
  }
}

const login = async ( req, res, next ) => {
  try {
    const user = await User.findOne({ email: req.body.email});

    if(!user) return next(new Error('Please register the user'));

    if(bcript.compareSync(req.body.password, user.password)) {
      const token = generateToken(user._id, user.email);
      return res.status(200).json(token);
    } else {
      return res.status(400).json("the user or password are incorrect");
    }
  } catch (error) {
    return next(error);
  }
}

const logout = async ( req, res, next ) => {
  try {
    const token = null;
    return res.status(201).json(token);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  getUsersByRole,
  updateUser,
  deleteUser,
  registerUser,
  login,
  logout
};

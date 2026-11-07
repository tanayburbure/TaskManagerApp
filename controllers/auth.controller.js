import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN || "id",
    },
  );
};

//SIGNUP
export const signup = async (req, res) => {
  try {
    const { name, email, password, phone, address, city } = req.body;

    //validate input
    if (!name || !email || !password) {
      return res.this.status(400).json({
        message: "Name,email and password are required",
      });
    }

    if (password.length < 6) {
      res.json.status(400).json({
        messgae: "Password must be at least 6 characters",
      });
    }

    //Check existing email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        message: "Email already registerd",
      });
    }

    //create user
    const user = await User.create({
      name,
      email,
      password,
      phone,
      address,
      city,
    });

    return res.status(201).json({
      message: "User registered successfully ",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    if (error.code == 11000) {
      return res.status(409).json({
        message: "Email already registered",
      });
    }
    return res.status(500).json({
      message: "Server error",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    //validate input
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }
    const user = await User.findOne({
      email: email.trim().toLowerCase(),
    }).select("+password");
    if (!user) {
      return res.status(409).json({
        message: "Invalid email or password",
      });
    }
    //compare entered password with hashed password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    //Generate JWT
    const token = generateToken(user);

    //Return response
    return res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("LOGIN ERROR:", error);

    return res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};

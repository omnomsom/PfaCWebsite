const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const registerUser = asyncHandler(async (req, res) => {
  const name = typeof req.body.name === "string" ? req.body.name.trim() : "";
  const email = typeof req.body.email === "string"
    ? req.body.email.trim().toLowerCase()
    : "";
  const { password } = req.body;

  if (!name || !email || typeof password !== "string" || !password) {
    res.status(400);
    throw new Error("Please enter your name, email, and password.");
  }

  if (name.length > 100) {
    res.status(400);
    throw new Error("Use 100 characters or fewer for your name.");
  }

  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    res.status(400);
    throw new Error("Enter a valid email address.");
  }

  if (password.length < 12 || Buffer.byteLength(password, "utf8") > 72) {
    res.status(400);
    throw new Error("Use at least 12 characters and no more than 72 UTF-8 bytes for your password.");
  }

  if (!process.env.JWT_SECRET) {
    res.status(500);
    throw new Error("Account service is unavailable.");
  }

  await User.init();
  const userExists = await User.findOne({ email }).collation({ locale: "en", strength: 2 });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  let user;
  try {
    user = await User.create({ name, email, password: hashedPassword });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400);
      throw new Error("User already exists");
    }
    throw error;
  }

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (typeof email !== "string" || typeof password !== "string" || !email || !password) {
    res.status(400);
    throw new Error("Invalid credentials");
  }

  const user = await User.findOne({ email: email.trim() })
    ?? await User.findOne({ email: email.trim().toLowerCase() });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

const getMe = asyncHandler(async (req, res) => {
  const { _id, name, email } = await User.findById(req.user.id);

  res.status(200).json({
    id: _id,
    name,
    email,
  });
});

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};

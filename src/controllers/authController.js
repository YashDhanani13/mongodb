// const User = require("../models/User");
// const bcrypt = require("bcryptjs");

import bcrypt from "bcrypt";
import User from "../model/User";
export const signup = async (req, res) => {
  const { email, password, confirmPassword } = req.body;

  // if not any filed are nit filped thenn it show this message

  if (!email || !password || !confirmPassword) {
    return res.status(400).json({ message: "All fields are required" });
  }
  // here  it cheack password adn confirm passwored both same so it move a head other it given error

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    email,
    password: hashedPassword,
  });

  res.status(201).json({
    message: "Signup successful",
    user: {
      id: newUser._id,
      email: newUser.email,
    },
  });
};

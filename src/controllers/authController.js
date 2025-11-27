import bcrypt from "bcrypt";
import User from "../model/User.js"; // make sure .js extension if using ES Modules

export const signup = async (req, res) => {
  try {
    const { email, password, confirmPassword } = req.body;

    // 1. Check required fields
    if (!email || !password || !confirmPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // 2. Check password match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // 3. Check user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // 4. Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 5. Create user
    const newUser = await User.create({
      email,
      password: hashedPassword,
    });

    // 6. Send response
    res.status(201).json({
      message: "Signup successful",
      user: {
        id: newUser._id,
        email: newUser.email,
      }
    });

  } 
  catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


import express from "express";
import cors from "cors";
import authRoutes from "./src/routes/authRoutes.js";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import productRoutes from "./src/routes/productRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// DB Connection
connectDB();

// Routes
app.get("/", (req, res) => {
  // Changed from app.use to app.get
  return res.status(200).send("Server is running ✅");
});

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});

// router

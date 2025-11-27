import express from "express";
import cors from "cors";
import authRoutes from "./src/routes/authRoutes.js";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import productRoutes from "./src/routes/productRoutes.js";

dotenv.config();

const app = express();

//  middleware
app.use(express.json());
app.use(cors());

//db conneactionreq

connectDB();

//routes (create a server):-

app.use("/", (req, res) => {
  return res.status(200).send("hello");
});

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});

// router

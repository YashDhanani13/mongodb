import express from "express";
import cors from "cors";
import authRoutes from "./src/routes/authRoutes";
import dotenv from  "dotenv";

import connectDB from './src/config/db';

const app = express();

//  middleware
app.use(express.json());

//db conneactionreq

connectDB();

//routes (create a server):-

app.use('/api/auth', authRoutes);

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});


// router
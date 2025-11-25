import express from "express";
import cors from "cors";
import connetDB from "./connetDB";
import authRoutes from "./src/routes/authRoutes";
import connectDB from "./db";


const app= express();



//  middleware
app.use(express.json())

//db conneactionreq

connectDB();






//routes (create a server)


app.listen(3000, () => {
    console.log('App listening on port 3000!');
});
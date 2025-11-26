import express from "express";
import { signup } from "../controllers/authController";

const route = express.Router();
route.post("/signup", signup);

module.exports = router;

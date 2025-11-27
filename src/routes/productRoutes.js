import express from "express";
import {
  getProduct,
  createProduct,
  deleteProduct,
} from "../controllers/productController";
import router from "./authRoutes";

const roter = express();

router.get("/", getProduct);

router.post("/", createProduct);
router.delete("/:id", deleteProduct);
 

export default productRoutes;
import express from "express";
import {
  getProduct,
  createProduct,
  deleteProduct,
} from "../controllers/productController";

const router = express.Router();

router.get("/", getProduct);

router.post("/", createProduct);
router.delete("/:id", deleteProduct);

export default router;

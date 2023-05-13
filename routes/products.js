import express from "express";
import { AllProducts, ProductById, UpdatePrice } from "../controllers/products.js";

const router = express.Router();

router.get("/products", AllProducts);
router.get("/products/:id", ProductById);
router.put("/products/:id", UpdatePrice);

export default router;

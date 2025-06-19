import express from "express";
import { ProductController } from "./products.controllers.js";

const router = express.Router();

// POST: Create product
router.post("/create-product",ProductController.createProductController );
router.get("/get-all-products",ProductController.getProductsControllers)


// GET: Search products
// router.get("/", getProducts);

export const ProductRouter= router;

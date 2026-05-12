import express from "express";
import {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";

import { verifyToken, isAdmin } from "../middlewares/auth.js";

const product_router = express.Router();

product_router.get("/getallproducts", getAllProducts);

product_router.post("/addproduct", createProduct);

product_router.put("/:id", updateProduct);

product_router.delete("/:id", deleteProduct);

product_router.get("/:id", getSingleProduct);

export default product_router;
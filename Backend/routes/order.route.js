import express from "express";
import { Checkoutt, GetOrders } from "../controllers/order.controller.js";

const order_router = express.Router();

order_router.post("/checkout", Checkoutt)
order_router.get("/orders", GetOrders);


export default order_router;
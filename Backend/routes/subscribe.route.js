import express from "express"
import { subscribe } from "../controllers/subscribe.controller.js"

const subscribe_router = express.Router()


subscribe_router.post("/subscribe", subscribe)


export default subscribe_router
import express from "express"
import { ContactUs } from "../controllers/contact.controller.js"

const contact_router = express.Router()


contact_router.post("/contact", ContactUs)


export default contact_router
import express from "express"
import dotenv from "dotenv"
import connectDB from "./connectDB/connectDB.js"
import SubscribeRoute from "./routes/subscribe.route.js"
import ContactRoute from "./routes/contact.route.js"
import UserRoute from "./routes/user.route.js"
import ProductRoute from "./routes/product.route.js"
import OrderRoute from "./routes/order.route.js"
import cors from "cors"
import Order from "./models/order.model.js"


dotenv.config()
const app = express()

connectDB()

app.use(cors());
app.use(express.json())


// routes 
app.use("/api", SubscribeRoute)
app.use("/api", ContactRoute)
app.use("/api", UserRoute)
app.use("/api/products", ProductRoute)
app.use("/api", OrderRoute)


app.get("/", (req, res) => {
    res.send("Hello by Velora")
})

const PORT = process.env.PORT || 2005
app.listen(PORT, () => {
    console.log(`Velora Backend is on http://localhost:${PORT}`)
})

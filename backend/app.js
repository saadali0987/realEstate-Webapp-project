import express from "express"
import postRoute from "./routes/postRoute.js"
import authRoute from "./routes/authRoute.js"
import cookieParser from "cookie-parser"

const app = express()

app.use(express.json())
app.use(cookieParser())

app.use("/api/posts", postRoute)
app.use("/api/auth", authRoute)


app.listen(6900, ()=>console.log("Server is running"))
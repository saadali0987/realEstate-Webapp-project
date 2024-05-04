import express from "express"
import postRoute from "./routes/postRoute.js"
import authRoute from "./routes/authRoute.js"
import userRoute from "./routes/userRoute.js"
import testRoute from "./routes/testRoute.js"
import cookieParser from "cookie-parser"
import cors from "cors"
const app = express()

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:6900/*'); // Allow requests from any origin
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
// });

app.use(cors({origin:"http://localhost:5173", credentials: true}))
app.use(cookieParser())
app.use(express.json())


app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/posts", postRoute)
app.use("/api/test", testRoute)



app.listen(6900, ()=>console.log("Server is running"))
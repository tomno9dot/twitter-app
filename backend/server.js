import express from 'express'
import authRoutes from "./routes/authRoutes.js"
import dotenv from "dotenv"
import connectDb from './db/connectMongoDb.js';
import cookieParser from 'cookie-parser';

dotenv.config();
const app = express()
const PORT = process.env.PORT ||  5000

app.use(express.json())
app.use(express.urlencoded({ extended: true})) //to parse form data
app.use(cookieParser())

app.use("api/auth", authRoutes)


app.listen(PORT, () => { 
     console.log(`Server is running on port ${PORT}`) 
     connectDb()

})
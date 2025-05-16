import express from 'express'
import cors from 'cors'
import cookieParser from "cookie-parser"

const app = express()
const corsOptions = {
  origin: ['https://reactify-code.netlify.app'], // Correct frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // Include credentials if needed
};

app.use(cors(corsOptions));



app.use(express.json())
app.use(express.urlencoded())
app.use(express.static("public"))
app.use(cookieParser());

import userRouter from './routes/user.router.js'
import fileRouter from './routes/file.router.js'


app.use("/api/v1/user",userRouter)
app.use("/api/v1/file",fileRouter)




export {app}
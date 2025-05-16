import { app } from "./src/app.js";

import dotenv from 'dotenv'
import connectDB from "./src/db/index.js";

dotenv.config({
    path:"./.env"
})

const PORT = process.env.PORT || 8001

app.get('/',(req,res)=>{
    res.send(`Hello world`)
})


connectDB()
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server listening on port: http://localhost:${PORT}`);
        
    })
})
.catch((err)=>{
    console.log(`MongoDB connection Error:- ${err}`);
    
})
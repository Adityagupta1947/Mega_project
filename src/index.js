import dotenv from "dotenv"
import express from "express"
import DB_Connect from "./db/index.js"

dotenv.config({
    path:"./.env"
})
const app = express()

DB_Connect().
then(()=>{   
    app.on("error",(error)=>{     // just an extra safety check for the error
        console.log("Error: ",error)
        throw error
    })

    app.listen(process.env.PORT,()=>{
        console.log("Server listening at port:",process.env.PORT)
    })
})
.catch((error)=>{
    console.log("Database connection failed")
})


app.get("/",(req,res)=>{
    res.send("database is connected successfully")
})



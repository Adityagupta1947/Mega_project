import dotenv from "dotenv"
import express from "express"
import DB_Connect from "./db/index.js"

dotenv.config({
    path:"./.env"
})
DB_Connect()

const app=express()

app.get("/",(req,res)=>{
    res.send("database is connected successfully")
})

app.listen(process.env.PORT,()=>{
    console.log("server is listening at port:",process.env.PORT)
})



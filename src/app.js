import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

// configuration settings
app.use(cookieParser())
app.use(cors({
    origin:[process.env.CLIENT_URL, `http://localhost:${process.env.PORT}`],
    credentials:true,
    methods:['GET','POST','PUT']
}))

app.use(express.json({limit:"10kb"}))
app.use(express.urlencoded({limit:"10kb",extended:true}))
app.use(express.static())

// configuration settings done



export default app


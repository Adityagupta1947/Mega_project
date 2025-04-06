import mongoose from "mongoose"
import { DB_NAME } from "../constants"

async function DB_Connect(){
    try {
    const connection_obj = await mongoose.connect(`${process.env.DB_URI}/${DB_NAME}`)
    console.log("\n",connection_obj)
    console.log("\n","Connected!! DB_HOST:",connection_obj.connection.host)
    } catch (error) {
        console.log("Database Connection Failed! Error:",error)
        // throw error
        process.exit(1)
    }
}

export default DB_Connect

import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js'
import express from 'express'
const app = express()
export const connectDb = async function(){

    try{
      await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      

      app.listen(process.env.PORT || 8000, ()=>{
        console.log(`App is listeningon port${process.env.PORT}`)
    })
    }
    catch(err){
        console.error( `Error While Connecting MongoDB` , err )
        process.exit(1)
    }
}
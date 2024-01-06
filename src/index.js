// require('dotenv').config/({path:'./env'})
import dotenv from 'dotenv'
import express from 'express'
import { connectDb } from './db/index.js'
const app = express()
dotenv.config({path:'./env'})



connectDb()


.then(()=>{
    app.listen((process.env.PORT , ()=>{
        connsole.log(`Server is at https://localhost:${process.env.PORT}`)
    }))

    app.on((err)=>{
        console.log(err)
    })
})


.catch((err)=>{
    console.log("Error 404 " )
    process.exit(1);
})







/*
import express from 'express'

const app = express()

((async()=>{
    try{
        await mongoose.connect(`process.env.${MONGODB_URI}/${DB_NAME}`)
        app.on("error" , (error)=>{
            console.log("ERR" , error)
            throw error

        })

        
        
        
    }
    catch(err){
        console.error(`Error while connection in MongoDb` , err)
        throw err
    }

}))()
*/
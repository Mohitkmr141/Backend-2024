import express, { urlencoded } from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser';
const app = express()

app.use(cookieParser())
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true

}))

app.use(express.json({
    limit:'20kb'
}))

app.use(urlencoded({
    extended:true,
    limit:"20kb"
}))

app.use(express.static("public"))

export default app;
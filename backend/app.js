import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import data from "./routes/data.js";

if(process.env.NODE_ENV !== "production"){
    dotenv.config({
        path: "backend/config/config.env",
    })
}
const app = express();

//middlewares
app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({extended : true ,limit: '50mb'}));
app.use(cors({
    origin : [process.env.FRONTEND_URL],
    methods : ["GET",'POST','PUT','DELETE'],
    credentials : true,
}));


//routes
app.use("/api/v1",data);

export default app;
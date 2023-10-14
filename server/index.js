import bodyParser from "body-parser";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import loginRoutes from "./Routes/loginRoutes.js"
import connectDB from "./database/conn.js";


dotenv.config();
const app=express();


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({extended:true}));
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("hello")
})

app.use("/api",loginRoutes)

connectDB().then(()=>{
    app.listen(3000,()=>{
        console.log("server connected to database and started on port 3000");
    })
})

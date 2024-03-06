import express from "express";
import cors from "cors";
import mongoose from "./database/database.js";
import router from "./routes/index.js";

const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.static('uploads'));
//routes
app.use(router);

app.use('*',(req,res)=>{
    res.status(404).json({message:'page not found'})
})

const port = 4000;
app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})
import express from "express";

const department = express.Router();

department.get('/data',(req,res)=>{
    try{
        res.status(200).json({message:'Data'})
    }catch(e){
       res.status(500).json(e);
    }
})

department.post('/data',(req,res)=>{
    try{
      res.status(200).json({message:'Post'})
    }catch(e){
      res.status(500).json(e);
    }
})

export default department;
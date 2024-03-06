import express from "express";
import multer from "multer";
import { nanoid } from "nanoid";

const image = express.Router();

const a = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,'uploads');
    },
    filename: (req,file,cb)=>{
        cb(null, `${nanoid()}-${file.originalname}`);
    },
});

const upload = multer({storage:a});

image.post('/upload',upload.single('file'),(req,res)=>{
    res.status(200).json({url:`http://localhost:3800/${req.file.filename}`})
})

export default image;
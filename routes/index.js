import express from "express";
import department from "./department_rout/index.js";
import image from "./images/index.js";

const router = express.Router();

router.use('/department',department);
router.use('/image',image);

export default router;

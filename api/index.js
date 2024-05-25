import express from "express";
import mongoose from "mongoose";
import UserRoutes from "./routes/user.route.js";
import authRoutes  from "./routes/auth.route.js"
const app=express();
app.use(express.json());

import dotenv from "dotenv"
dotenv.config();

 const x="mongodb+srv://codewithnitesh:nBqPcNZ47jQKEXYu@nitesh.xkllnvf.mongodb.net/nitesh"
mongoose.connect(x)
.then(()=>{

    console.log("Mongodb is connected");

}).catch((err)=>{
    console.log(err);
});

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})

app.use("/api/user",UserRoutes);
app.use("/api/auth",authRoutes);

app.use((err,req,res,next)=>{
  const statusCode=err.statusCode||500;
  const message=err.message||"Internal server error";
  res.status(statusCode).json({
    success:false,
    statusCode,
    message


  })
})

import express from "express";
import mongoose from "mongoose";
import UserRoutes from "./routes/user.route.js";
const app=express();

import dotenv from "dotenv"
dotenv.config();

 const x=process.env.MONGO_URI;
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


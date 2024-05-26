const express=require("express");

const mongoose=require("mongoose");
const userRoute=require("./routes/user.route")
const server=express();
server.use(express.json())
server.use("/user",userRoute);


mongoose.connect("mongodb://localhost:27017/backendPractice").then(()=>{
    console.log("connected to db");
    server.listen(3001,()=>console.log("hi"));
}).catch((e)=>{
    console.log(e);
})
const user = require("../Model/user.model")

 const getUser=async(req,res)=>{
    console.log("controler");
    let d=await user.find({})
    res.json(d);
 }
 const postUser=async(req,res)=>{
    console.log("controler");
    let d=await user.create(req.body);
    res.json(d);
 }

 const deleteUser=async(req,res)=>{
    console.log("controler");
    let d=await user.deleteOne(req.body);
    res.json(d);
 }

 const updateUser=async(req,res)=>{
    console.log("controler");
    const {id}=req.params
    let d=await user.findOneAndUpdate({id:id},req.body,{
        new:true
    });
    res.json(d);
 }
 
 const search=async(req,res)=>{
    let {id}=req.params
    console.log(id)
    let d=await user.findOne({id:+id});
    res.json(d);
 }
 module.exports={getUser,postUser ,deleteUser ,search,updateUser};
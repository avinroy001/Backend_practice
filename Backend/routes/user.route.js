const {getUser, postUser, deleteUser, search, updateUser} = require("../controller/user.controller");

const Router=require("express").Router();
console.log("routes")
Router.get("/",getUser);
Router.post("/",postUser);
Router.delete("/",deleteUser);
Router.get("/:id",search);
// Router.put("/:id",);
Router.patch("/:id",updateUser);

module.exports=Router
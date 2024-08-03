const express= require("express");
const router=express.Router();

//users
//index users
router.get("/",(req,res)=>{
    res.send("Hii I am get users");
})

//show route
router.get("/:id",(req,res)=>{
    res.send("Get for show user id");
})

router.post("/",(req,res)=>{
    res.send("post for users");
})

router.delete("/:id",(req,res)=>{
    res.send("Delete users");
})

module.exports=router;

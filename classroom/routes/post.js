const express= require("express");
const router=express.Router();

//posts
router.get("/",(req,res)=>{
    res.send("Hii I am get posts");
})

//show route
router.get("/:id",(req,res)=>{
    res.send("Get for show posts id");
})

router.post("/",(req,res)=>{
    res.send("post for posts");
})

router.delete("/:id",(req,res)=>{
    res.send("Delete posts");
})

module.exports=router;

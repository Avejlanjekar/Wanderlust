const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const passportLocalMongoose=require("passport-local-mongoose");

const userSchema=new Schema({
    email:{
        type:String,
        required:true,
    },
});
//username and passport passportLocalMongoose will define
//pbkdf2 hashing algo is used in passport.
userSchema.plugin(passportLocalMongoose);

module.exports=mongoose.model("User",userSchema);
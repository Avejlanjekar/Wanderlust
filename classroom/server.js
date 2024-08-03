const express= require("express");
const app=express();
const users=require("./routes/user.js");
const posts=require("./routes/post.js");
// const cookieParser=require("cookie-parser");
const session=require("express-session");
const flash=require("connect-flash");
const path=require("path");

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));

const sessionOptions={
    secret:"mysecretsession",
    resave:false,
    saveUninitialized:true
}

app.use(session(sessionOptions));
app.use(flash());
app.use((req,res,next)=>{
    res.locals.successMessage=req.flash("success");
    res.locals.errorMessage=req.flash("error");
    next();
})

app.get("/register",(req,res)=>{
    let {name="anonyms"}=req.query;
    req.session.name=name;
    if(req.session.name==="anonyms"){
        req.flash("error","user not registered");
    }else{
        req.flash("success","user successfully registered");
    }
    res.redirect("/hello");
})

app.get("/hello",(req,res)=>{
    res.render("page.ejs",{name:req.session.name});
});


// app.get("/reqcount",(req,res)=>{
//     if(req.session.count){
//         req.session.count++;
//     }else{
//         req.session.count=1;
//     }
//     res.send(`You sent a request ${req.session.count} times`);
// });

// app.get("/test",(req,res)=>{
//     res.send("test succesful");
// })

// app.use(cookieParser("secretcode"));

// app.get("/signedcookies",(req,res)=>{
//     res.cookie("made-in","india",{signed:true});
//     res.send("signed cookie sent");
// });

// app.get("/verify",(req,res)=>{
//     console.log(req.signedCookies);
//     res.send("verified");
// });

// app.get("/getcookies",(req,res)=>{
//     res.cookie("Made By", "Avej lanjekar");
//     res.cookie("Greet","Hello!");
//     res.send("we sent u a cookie");
// })

// app.get("/greet",(req,res)=>{
//     let {name="Owes"}=req.cookies;
//     res.send(`hi ,${name}`);
// })

// app.get("/",(req,res)=>{
//     console.log(req.cookies);
//     res.send("hii I am root");
// })

// app.use("/users",users);
// app.use("/posts",posts);

app.listen(3000,()=>{
    console.log("server listining on port 3000");
})
const { log } = require('console');
const express=require('express')
const mongoose=require('mongoose')
const path=require('path')
const app=new express();
const User=require("./models/user")

app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}))
app.listen(3000,(req,res)=>{
    console.log("started successfully");
    
});

//Connection with mongo DB
mongoose.connect("mongodb://127.0.0.1:27017/college")
.then(()=>console.log("Mongodb connected"))
  .catch(err=>console.log("connection error",err))

//routing
app.get("/register",(req,res)=>{
res.render("register")
});

app.post("/register",async(req,res)=>{
    try{
        const {fname,lname,uname,email}=req.body
        const user=new User({fname,lname,uname,email})
        await user.save()
        res.end('registration successfully');
    }
    catch(err){
        res.status(500).send("server error")
    }
    
});
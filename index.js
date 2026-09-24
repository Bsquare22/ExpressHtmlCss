const { log } = require('console');
const express=require('express')
const path=require('path')
const app=new express();

app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}))
app.listen(3000,(req,res)=>{
    console.log("started successfully");
    
});
app.get("/register",(req,res)=>{
res.render("register")
});

app.post("/register",(req,res)=>{
    const {fname,lname,uname,email}=req.body
    console.log(`first name is ${fname}last name is ${lname}user name is ${uname}email  is ${email}`);
    res.end('registration successfully');
});
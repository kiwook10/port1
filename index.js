const express = require("express");
const app = express(); 

const port = 3000

app.set("view engine","ejs")
app.use(express.static('public'));


app.listen(port,()=>{
    console.log("서버가 잘 실행되고 있습니다");
})

app.get("/",(req,res)=>{
    
    res.render("index.ejs")
})

app.get("/membership",(req,res)=>{
    
    res.render("membership.ejs")
})

app.get("/qna",(req,res)=>{
    
    res.render("qna.ejs")
})

app.get("/experience",(req,res)=>{
    
    res.render("experience.ejs")
})

app.get("/genesis",(req,res)=>{
    
    res.render("genesis.ejs")
})

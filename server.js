const express=require("express");
const app =express()

app.use(express.static(__dirname));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html");
})

app.listen(process.env.PORT || 3000,function(){
    console.log("server  hazır");
})

var express=require("express");
var cookieParser = require('cookie-parser')
 var fs=require("fs");
 var app=express();

app.use(cookieParser())

 app.get("/", function (req,res) {
     res.sendfile(__dirname+"/index.html");
 });
 app.get("/test.html", function (req,res) {
     console.log(req.cookies)
     res.sendfile(__dirname+"/test.html");
 });
 
 app.get("/index2.html", function (req,res) {
     console.log(req.cookies)
     res.sendfile(__dirname+"/index2.html");
 });
 app.post("/index2.html", function (req,res) {
   res.send(req.cookies.userName);
 });

 app.post("/index.html", function (req,res) {
     console.log(req.cookies)
     for(var key in  req.cookies){
         res.write("cookie名:"+key);
         res.write(",cookie值:"+req.cookies[key]+"<br />");
     }
     res.end();
 });
 app.listen(8080, function () {
     console.log("开始监听8080");
 });

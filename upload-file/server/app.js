var express = require("express");
var bodyParser = require("body-parser");
var multer = require("multer");  //上传文件主要利用这个包
var fs = require("fs");
var app = express();
var path = require("path");
var upload = multer({ dest: './public/avatars/' });　　//文件保存位置

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post("/upload", upload.single('avatar'), function(req, res) {
  console.log(req);
  res.send(req.file);
});
var server = app.listen(8000, function() {
  console.log("Listening on port %s...", server.address().port);
});

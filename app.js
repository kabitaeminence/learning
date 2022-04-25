// const express = require('express')
// const app = express.Router()
// const router = express()

// app.use((req, res, next) => {
//   console.log('Time:', Date.now())
//   next()
// })

// router.post("/",(req,res,next) =>{
//     const {name, email,password} = obj

// })

// router.get("/",(req,res,next) =>{
//     // res.send('Time:', Date.now())
//     res.send("manvi -------------")
//     next()

// })

// router.listen(2000,()=>{
//     console.log("server is runing port number 2000")
// })

var express = require('express');
var app = express();

//First middleware before response is sent
app.use(function(req, res, next){
   console.log("Start");
   next();
});

//Route handler
app.get('/', function(req, res, next){
   res.send("Middle");
   next();
});

app.use('/', function(req, res){
   console.log('End');
});

app.listen(3000,()=>{
    console.log("server is running port number 3000")
});
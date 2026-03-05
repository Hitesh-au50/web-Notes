const mongoose = require('mongoose');
const express = require('express');

const app = express();

mongoose.set("strictQuery", false)
mongoose.connect("mongodb://localhost:27017/learning_mongodb",
{useNewUrlParser:true , useUnifiedTopology: true},
(err) =>{
    if(err){
        console.log("connection failed",err)
    }
    else{
        console.log("conection sucessful")
    }
}
)


app.listen(7000 , () =>{
    console.log("listening")
})
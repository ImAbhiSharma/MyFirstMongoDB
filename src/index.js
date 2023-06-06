const bodyparser=require('body-parser')
const mongoose = require("mongoose");
const express = require("express");
const app = express();
app.use(bodyparser.json())

const userController = require("./controller/userControl")

mongoose.connect("mongodb+srv://abhi25252525:Reactjs@cluster0.whjnfaa.mongodb.net/chat_app", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )




app.use("/create_user",userController.createUser)


app.listen(3000,()=>{
    console.log("Server running");
})
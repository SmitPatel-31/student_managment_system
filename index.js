const express = require('express');
const cookieParser  = require('cookie-parser');
// const cookieSession = require('cookie-session')
const app = express();

const port = 8000;
const db = require('./config/mongoose');
const { urlencoded } = require('express');



// app.get('/',function(req,res){
//     res.send("<h1>Hello World<h1>")
// })
app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static('./assets'));


app.use('/',require('./routes'));

app.set('view engine','ejs');
app.set('views','./views')
app.listen(port,function(err){
    if(err){
        console.log(err+"error in the code");
    }
    console.log("server is running on " +  port);
})

// connect data in mongo db:

// const mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost:27017/fruits");

// const fruitSchema = new mongoose.Schema({
//     name:String,
//     score:Number,
//     review:String
// });

// const Frut = mongoose.model("Frut",fruitSchema);
// const fruit = new Frut({
//     name:"Apple",
//     score:7,
//     review:"Best fruit"
// });
// const fruit2 = new Frut({
//     name:"mango",
//     score:3,
//     review:"Best fruit"
// });
// fruit.save();
// fruit2.save();

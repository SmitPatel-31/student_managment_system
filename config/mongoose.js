const mongoose =require('mongoose');

mongoose.connect('mongodb://localhost/fms_devlopment');

const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error n conection"))

db.once('open',function(){
    console.log("connecting to database");
});

module.exports= db;
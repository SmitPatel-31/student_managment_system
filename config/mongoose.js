const mongoose =require('mongoose');

const dotenv = require('dotenv');
const db = process.env.MONGODB_URI;

// mongoose.connect(process.env.MONGODB_URI,{
//     useNewUrlParser:true,
//     useCreateIndex:true,
//     useUnifiedTopology:true,
//     useFindAndModify:false

// }).then(()=>{
//     console.log(`connected sucessfully`);
// }).catch((err)=>console.log(`no connection bhaiiii`));
try{
mongoose.connect( MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true}, () =>
console.log("connected"));    
}catch (error) { 
console.log("could not connect");  
}

// db.on('error',console.error.bind(console,"Error n conection"))

// db.once('open',function(){
//     console.log("connecting to database");
// });

module.exports=(db);
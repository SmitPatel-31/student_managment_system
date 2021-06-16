const mongoose =require('mongoose');

const dotenv = require('dotenv');
const db = process.env.MONGODB_URI;

mongoose.connect(process.env.MONGODB_URI ,{
    useNewUrlParser:true,

    useUnifiedTopology:true

});

// .then(()=>{
//     console.log(`connected sucessfully`);
// }).catch((err)=>console.log(`no connection bhaiiii`));



// db.on('error',console.error.bind(console,"Error n conection"))

// db.once('open',function(){
//     console.log("connecting to database");
// });

module.exports={mongoose};
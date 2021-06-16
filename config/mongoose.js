const mongoose =require('mongoose');


const db = process.env.MONGODB_URI||'mongodb+srv://smit:smitp31076351@cluster0.rzg9x.mongodb.net/students?retryWrites=true&w=majority';

mongoose.connect(process.env.MONGODB_URI || db,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log(`connected sucessfully`);
}).catch((err)=>console.log(`no connection`));



// db.on('error',console.error.bind(console,"Error n conection"))

// db.once('open',function(){
//     console.log("connecting to database");
// });

module.exports={mongoose};
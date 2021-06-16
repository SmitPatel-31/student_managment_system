const mongoose =require('mongoose');

const dotenv = require('dotenv');



const mongoAtlasUri =
  "mongodb+srv://smit:smit@123@cluster0.rzg9x.mongodb.net/students?retryWrites=true&w=majority";

try {
  // Connect to the MongoDB cluster
  mongoose.connect(
    mongoAtlasUri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" Mongoose is connected"),
  );
} catch (e) {
  console.log("could not connect");
}

const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
dbConnection.once("open", () => console.log("Connected to DB!"));
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

// module.exports=(mongoAtlasUri);
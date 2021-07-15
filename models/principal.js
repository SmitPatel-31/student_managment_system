const mongoose = require('mongoose');

const principalSchema  = new mongoose.Schema({
    
    email:{
        type: String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required:true,
        
    }

},{
    timestamps:true
});

const principal = mongoose.model('principal', principalSchema);

module.exports=principal;
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const studentsignupSchema  = new mongoose.Schema({
    name:{
        type: String,
        required:true,
        
    },
    email:{
        type: String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required:true,
        
    },
    birthdate:{
        type: String,
        required:true,
    },
    std:{
        type:String,
        required:true
    },
    rollno:{
        type: String,
        required:true,
        unique:true
    }
    
    
    
},{
    timestamps:true
});

// to encrypt the student password
studentsignupSchema.pre("save",async function(next){
    this.password = await bcrypt.hash(this.password,10);

    next();
})
const student = mongoose.model('student',studentsignupSchema);

module.exports=student;
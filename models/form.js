const mongoose = require('mongoose');


const formSchema  = new mongoose.Schema({
    student_signup:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'student'
    },
    std:{
        type:String,
        required:true
        
    },
    subject:{
        type: String,
        required:true
    },
    q1:{
        type:String,
        required:true
    },
    q2:{
        type: String,
        required:true
        
    },
    q3:{
        type:String,
        required:true
    },
    q4:{
        type:String,
        required:true
    },
    q5:{
        type:String,
        required:true
    },
    q6:{
        type:String,
        required:true

    },
    grade:{
        type:String,
        required:true

    },
    feedback:{
        type:String,
        required:true

    }
    
    
},{
    timestamps:true
});


const Form = mongoose.model('Form',formSchema);

module.exports=Form;



// when im filling form then data not save and give error

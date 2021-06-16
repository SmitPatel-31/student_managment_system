const Form = require('../models/form')
const student = require('../models/student_signup')
module.exports.create= async function(req,res){
    console.log(req.body);
    // console.log(req.cookies['student_id']);
    let users =await student.findById(req.cookies.student_id);
    if(req.cookies['student_id']!=null && users.std==req.body.std){
    Form.create({

        student_signup:req.cookies['student_id'],
        std:req.body.std,
        subject:req.body.subject,
        q1:req.body.q1,
        q2:req.body.q2,
        q3:req.body.q3,
        q4:req.body.q4,
        q5:req.body.q5,
        q6:req.body.q6,
        grade:req.body.grade,
        feedback:req.body.feedback
    },function(err,form){
        if(err){
            console.log('not connected',err);return
        }
        else{
            console.log(req.body)
        }
        return res.redirect('/users/profile');
    });
    
}else{
        // return res.redirect('/users/signin_student');
        res.send("you logged Out please logging again  OR You selected wrong std so please select your std and subject");
}
}

// const Form = require('../models/form')
// module.exports.create= function(req,res){
//     Form.create ({
//         std:req.body.std
        
//     },function(err,form){
//         if(err){
//             console.log('error in creating post');return;
//         }
//         return res.redirect('back');
//     });
    

// module.exports.profile = function(req,res){
//     Form.find({},function(err,forms){
//         return res.render('profile',{
//             title:"Profile",
//             forms:forms
//         });
//     });
// }
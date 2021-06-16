const student = require('../models/student_signup');
const Form = require('../models/form')
const bcrypt = require('bcrypt');
//  const cookieSession = require('cookie-session');
const { getMaxListeners } = require('../models/student_signup');
// var cookieSession = require('cookie-session')
// var express = require('express');

// var app = express();

module.exports.home = function(req, res){
    return res.render('header');
    
}

module.exports.signup_student = function(req, res){
    return res.render('signup_s',{
        title:"sign up"
    });
    
}
module.exports.signin_student = function(req, res){
    return res.render('signin_s',{
        title:"sign up"
    });
    
}
// get sign up data
module.exports.create= function(req,res){
    // console.log(req.body)
    student.findOne({email:req.body.email},function(err,student_signup){
        if(err){
            console.log('error in finding user');return
        }
        if(!student_signup){
            student.create (req.body,function(err,student_signup){
                if(err){
                    console.log('not connected',err);return
                }
                return res.redirect('/users/signin_student');
            })
        }
    });
}

module.exports.createsession= function(req,res){
    student.findOne({email:req.body.email}, async function(err,student_signup){
        if(err){
            console.log('error in finding user');return
        }
        // console.log(student_signup.password);
        // console.log(req.body.password);
        // const match1= bcrypt.hash(this.password,10);
        const match= await  bcrypt.compare(req.body.password,student_signup.password)

        // console.log(match);
        // console.log(student_signup.password);
        if (match){
            
            res.cookie('student_id',student_signup.id);
            // app.use(cookieSession({
            //     name: 'session',
            //     keys: ['student_signup.id']
              
            //     // // Cookie Options
            //     // maxAge: 24 * 60 * 60 * 1000 // 24 hours
            //   }))
            return res.redirect('/users/profile');
        }
        else{
            res.send("invalid password")
            return (res.redirect('back'));
        }
        student.save();
    });

}
// module.exports.profile = function(req, res){
//     if(req.cookies.student_id){
//         student.findById(req.cookies.student_id,function(err,student_signup){
//             if(student_signup){
//                 return res.render('profile',{
//                     title:"user profile",
//                     user:student_signup
//                 })
//             }else{
//                 return res.redirect('/users/signin_student');

//             }

//         });
//     }
//     else{
//         return res.redirect('/users/signin_student');
//     }

    

module.exports.signin_faculty = function(req, res){
    
    return res.render('signin_faculty');
    
}

module.exports.ragister=function(req,res){
    if(req.body.email==='principal@gmail.com' && req.body.password==123456){
        res.cookie('principal_id',req.body.email);
        if(req.cookies['principal_id']!=null){
                Form.find({},function(err,forms){
            return res.render('dashboard',{
                title:"dashboard",
                forms:forms
                
            });
        });

    
            
        }
        else{
            return res.redirect('/users/signin_principal'); 
        }
    }else{
        return res.redirect('/');
    }

}

module.exports.dashboard = async function(req, res){
    if(req.cookies.principal_id){
    //     let a= req.cookies.student_id
    //     console.log(a)
    //     let users =await student.findById(a);
    //     console.log(users.name)
    //     let abc= await Form.find({}).populate('student_signup').exec(function(req,forms){
    //         return res.render('dashboard',{
    //             title:"dashboard",
    //             forms:forms,
    //             user:users,
    //             a:a
               
                
                
                
    //         });
    //     })
            
    //     }
    //     else{
    //         return res.redirect('/users/signin_student');
    //     }
    // }
    return res.render('dashboard',{
        title:"dashboard"
    });
}}
    

    // hhjhjkjk
module.exports.signout= function(req,res){
    // console.log(req.cookie.student_id)
    // document.cookie = "username=student_id"; expires="Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    // document.cookie="student_id";
    // req.cookies['student_id=0']
    // document.cookie="student_id=;expires= Sun, 30 May 2021 20:00:00 UTC";
    // console.log('hello');
    // document.cookie="student_id=,max-age=0";
    res.cookie('student_id',req.cookies['student_id'], {maxAge:0});
    
    return res.render('home',
        {title:"user profile"});

}
// var removing = browser.cookies.remove(
//     details               // object
//   )
// populating usrer
// module.exports.profile = function(req,res){
    
//     Form.find({}).populate('student_signup_id').exec(function(err,student_signup,form){
//         return res.render('profile',{
//             title:"Profile",
//             user:student_signup,
//             form:form

            
//         });
//     });
// };
// module.exports.profile = function(req,res){
//     Form.find({}).populate('student_signup').exec(function(req,forms){
//         return res.render('profile',{
//             title:"Profile",
//             forms:forms,
//             user:'student_signup'
            
            
//         });
//     })
        
//     }

module.exports.profile =async function(req,res){
    if(req.cookies.student_id){
    let a= req.cookies.student_id
    console.log(a)
    let users =await student.findById(a);
    console.log(users.name)
    let abc= await Form.find({}).populate('student_signup').exec(function(req,forms){
        return res.render('profile',{
            title:"Profile",
            forms:forms,
            user:users,
            a:a
           
            
            
            
        });
    })
        
    }
    else{
        return res.redirect('/users/signin_student');
    }
}
    
    
    
    
    
    
    // Form.find({},function(err,forms){
    //         return res.render('profile',{
    //             title:"Profile",
    //             forms:forms,
    //             user:student_signup
                
    //         });
    //     });


module.exports.sign_out_faculty= function(req,res){
    res.cookie('principal_id',req.cookies['principal_id'], {maxAge:0});
    
    return res.render('home',
        {title:"Home"});

}
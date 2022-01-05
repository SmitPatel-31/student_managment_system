const express = require('express');

const router = express.Router();
const userController = require('../controller/user_controller')

module.exports = router;


router.get('/signup_student',userController.signup_student);
router.get('/signin_student',userController.signin_student)
router.post('/create',userController.create);
router.post('/createsession',userController.createsession);
router.get('/profile',userController.profile)
router.get('/signin_principal',userController.signin_faculty);
router.post('/ragister',userController.ragister);
router.get('/dashboard',userController.signin_faculty);
router.get('/signout',userController.signout);
router.get('/sign_out_faculty',userController.sign_out_faculty);
router.get('/std10detail',userController.std10detail);
router.get('/std11detail',userController.std11detail);
router.get('/std12detail',userController.std12detail);
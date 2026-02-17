const express= require('express');
const {handleUserLogin , handleUserSignup, handleUserVerify, handleUserLogout}= require('../Controllers/User')
const router= express.Router();

router.post('/login',handleUserLogin );
router.post('/signup' , handleUserSignup);
router.get('/verify' , handleUserVerify);
router.post('/logout' , handleUserLogout);

module.exports=router;
const express= require('express');
const {handleUserLogin , handleUserSignup, handleUserVerify}= require('../Controllers/User')
const router= express.Router();

router.post('/login',handleUserLogin );
router.post('/signup' , handleUserSignup);
router.get('/verify' , handleUserVerify)

module.exports=router;
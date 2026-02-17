const {getUser} = require('../Services/auth');

async function restrictToLoggedInUserOnly(req , res , next){
    const token=req.cookies?.token;
    if(!token) {
        return res.status(401).json({message:"Unauthenticated"});
    }
    const user= getUser(token);
    if(!user) return res.status(401).json({message : "Invalid Token"});
    req.user=user;
    next();
}

module.exports={
    restrictToLoggedInUserOnly,
    
}
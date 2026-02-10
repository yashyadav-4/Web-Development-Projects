const User=require('../Models/User');
const bcrypt= require('bcryptjs')
const {getUser , setUser}= require('../Services/auth')

function handleUserVerify(req , res){
    const token= req.cookies?.token;
    if(!token) return res.status(404).json({authenticated:false});
    const user= getUser(token);
    return res.json({authenticated:!!user});
}

async function handleUserSignup(req , res){
    try{
        const {name , email , password}= req.body;
        
        const user= await User.findOne({email});
        if(user){
            return res.status(400).json({message:"User already exist"});
        }
        const hashedPassword= await bcrypt.hash(password , 10);
        await User.create({
            name , 
            email,
            password:hashedPassword,
        })
        return res.status(200).json({message:"Account Created succesfully"});
    }
    catch(err){
        console.log(err);
        return res.status(500).json({message:"Internal Server Error"});
    }
}

async function handleUserLogin(req , res){
    try{
        const {email , password}= req.body;
        if(!email || !password) {
            return res.status(400).json({Error: "invalid Credentials"});
        }
        const user= await User.findOne({email});
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        const isMatch= await bcrypt.compare(password , user.password);
        if(!isMatch){
            return res.status(400).json({message:"Invalid Credentials"});
        }
        const token=setUser(user);
        res.cookie('token' , token ,{
            httpOnly:true,
            path:'/',
            sameSite:'strict',
            maxAge:7* 24 *60 *60 *1000,
        })

        return res.status(200).json({message:"Login successful"});
    }catch(err){
        console.log(err);
        return res.status(500).json({message:"Internal Server Error"});
    }
}

module.exports={
    handleUserSignup,
    handleUserLogin,
    handleUserVerify,

}
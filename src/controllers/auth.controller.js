const User = require("../models/user.model")

const jwt = require("jsonwebtoken")


const newToken = (user)=>{
    return jwt.sign({user:user},"shhh")
}

const register = async(req,res)=>{

try{
    let user = await User.findOne({email: req.body.email}).lean().exec()

    if(user){return res.status(400).json({
        status:"failed",
        message:"Please provide a different email adress"
    })}

    else{
        user = await User.create(req.body)

        const token = newToken(user)

        res.status(201).json({user,token})
    }




}catch(e){
    return res.status(500).json({status:"failed", message:e.message})
}



}


const login = async(req,res)=>{

   
try{
    let user = await User.findOne({email: req.body.email})

    if(!user){return res.status(400).json({
        status:"failed",
        message:"Please provide a correct email adress or password"
    })}

    
      const match = await user.checkPassword(req.body.password)

    if(!match){
        return res.status(400).json({
            status:"failed",
            message:"Please provide correct email or password"
        })
    }

    const token = newToken(user)

    res.status(201).json({user,token})


}catch(e){
    return res.status(500).json({status:"failed", message:e.message})
}


}


module.exports = { register,login}
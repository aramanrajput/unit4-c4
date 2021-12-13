const jwt = require("jsonwebtoken")


const verifytoken = (token)=>{
    return jwt.verify(token,"shhh")
}

module.exports = (req,res,next)=>{
    const bearerToken = req?.headers?.authorization
    
    if(!bearerToken){
        return res.status(400).json({status:"failed"})
    }

    const token = bearerToken.split("")[1]

    const user = verifytoken(token)

    if(!user){
        return res.status(400).json({status:"failed"})
    }
    

    return next()
}
const mongoose = require("mongoose")

const bcrypt = require("bcryptjs")
const userSchema = new mongoose.Schema({

    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    profile_photo_url:{type:String,required:true},
    roles:{type:String,required:true}
},{
    versionKey:false,
    timestamps:true
})


userSchema.pre("save",(next)=>{
if(!this.isModified("password")){
    return next()
}else{
    const hash = bcrypt.hashSync(this.password,10);
    this.password = hash
    return next()
}
})







const User = mongoose.model("user",userSchema)

module.exports = User


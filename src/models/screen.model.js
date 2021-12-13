const mongoose = require("mongoose")

const screenSchema = new mongoose.Schema({

    name:{type:String,required:true},
   theater_id:{type:mongoose.Schema.Types.ObjectId,
ref:"theater",
required:true
}
},{
    versionKey:false,
    timestamps:true
})

const Screen = mongoose.model("screen",screenSchema)

module.exports = Screen
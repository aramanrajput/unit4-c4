const mongoose = require("mongoose")

const seatsSchema = new mongoose.Schema({

    
   show_id:{type:mongoose.Schema.Types.ObjectId,
ref:"shows",
required:true
}
},{
    versionKey:false,
    timestamps:true
})

const Seats = mongoose.model("seats",seatsSchema)

module.exports = Seats
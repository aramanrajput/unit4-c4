const mongoose = require("mongoose")

const showsSchema = new mongoose.Schema({

    timing:{type:Number,required:true},
    movie_id:{type:mongoose.Schema.Types.ObjectId,
    ref:"movie",
    required:true
    },
    total_seats:{type:Number,required:true},
    screen_id:{type:mongoose.Schema.Types.ObjectId,
    ref:"screen",
    required:true
    }
},{
    versionKey:false,
    timestamps:true
})

const Shows = mongoose.model("shows",showsSchema)

module.exports = Shows
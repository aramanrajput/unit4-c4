const express = require("express")

const authenticate =require("../middlewares/authenticate")

const Movie = require("../models/movies.model")


const router = express.Router()




router.post("/",authenticate,async(req,res)=>{
    try{

const movie = await Movie.create({
    name:req.body.name,
    actors:req.body.actors,
    languages:req.body.languages,
    directors:req.body. directors,
    poster_url:req.body.poster_url
})    
    }catch(e){
        return res.status(500)
    }
})

module.exports = router
const app = require("./index")


const connect = require("./configs/db")


app.listen(2345,async()=>{
    await connect()
    console.log("listening on port 2345")
})
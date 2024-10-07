require('dotenv').config();
const express = require("express");


const app = express();
let PORT =process.env.PORT || 5000

app.use(express.json());



// testing url
app.use("/",(req,res)=>{
    // console.log(res)
    res.send("jay shree ram ")
})



app.listen(PORT,()=>{
    console.log(`app is listiening on ${PORT}`)
})
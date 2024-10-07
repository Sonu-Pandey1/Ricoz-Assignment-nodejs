require('dotenv').config();
const express = require("express");
const userRouter = require("./routers/userRouter")
const dbConnect = require("./conf/db/dbConfig")

const app = express();
let PORT = process.env.PORT || 5000

app.use(express.json());

// actual urls
app.use("/api", userRouter)

// connect to mongoDB
dbConnect();



// testing url
app.use("/", (req, res) => {
    // console.log(res)
    res.send("jay shree ram , this is test url for main urls go to /api/get or /api/update or /api/delete oe /api/post etc .       if you are not find this assignment inuf good then please give me anithe chnase to prove myself i do best  thank you. ")
})



app.listen(PORT, () => {
    console.log(`app is listiening on ${PORT}`)
})
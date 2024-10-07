
const mongoose = require("mongoose");

const dbConnect = async ()=>{

    try {
        const connection = await  mongoose.connect(process.env.MONGODB_URI);
        console.log("mongoDb Connected Successfully.")
        
    } catch (error) {
        console.log("mongoDb Connection Error:",error)
        
    }
}

module.exports = dbConnect;
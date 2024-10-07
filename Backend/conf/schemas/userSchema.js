
const {Schema,model, models} = require("mongoose")

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }

});

const user = model("user",userSchema);

module.exports = user;
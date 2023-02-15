const mongoose =  require("mongoose");
const Schema = mongoose.Schema;

const userObj = {
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        minLength: 8
    }
} 

const userSchema = new Schema(userObj);

module.exports = mongoose.model("Users", userSchema);
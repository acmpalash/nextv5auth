
const { Schema, model, models } = require('mongoose');

const UserSchema = new Schema({
    clerkId:{
        type:String,
        required:true,
        unique: true,
    },
    email:{
        type:String,
        required:true,        
    },
    username:{
        type:String,
        required:true,        
    },
    photo:{
        type:String,
        required:true,        
    },
    firstName:{
        type:String,      
    },
    lastName:{
        type:String,
    },
});

const User = models.User || model("User", UserSchema);

module.exports = User;
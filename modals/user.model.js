import { Schema, model, models } from 'mongoose';
import { unique } from 'next/dist/build/utils';

const UserSchema = new Schema({
    cleakId:{
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

const User = models?.User || model("User", UserSchema);

export default User;
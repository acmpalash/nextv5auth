import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";

const userSchema = new mongoose.schema({
    clerkId:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
    },
    username:{
        type: String,
        required: true,
    },
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,
    },
    avatar:{
        type: String,
        required: true,
    },

}, { timestamps: true});

const User = mongoose.models.User || mongoose.module('User', userSchema)

export default User;
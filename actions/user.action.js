"use server"

import User from "@/models/user.model";
import { connect } from "@/db/";

export async function createUser(user) {
    try{
        await connect();
        const newUser = await User.create{user:any);
        return JSON.parse(JSON.stringify(newUser))
    }catch (error){
        console.log(error)
    }
}
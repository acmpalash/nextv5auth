import mongoose, {Mongoose} from "mongoose";

const MONGODB_URL=process.env.MONGODB_URL;

let cached = global.mongoose;

if(!cached){
    cached = global.mongoose = {
        conn: null,
        promise: null,
    };
}

export const connect = async ()=> {
    if(cached.conn) return cached.conn;

    cached.promise = 
    cached.promise || mongoose.connect(MONGODB_URL, {
        dbName: "nextv5auth",
        bufferCommands: false,
        connectTimeoutMS: 30000,
    });
    cached.comm = await cached.promise;

    return cached.conn;
};
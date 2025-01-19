import mongoose from "mongoose";

let initialized = false;

export const connect = async ()=> {
    mongoose.set('strictQuery', true)

    if(initialized){
        console.log('MongoDb already connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'nextv5auth',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Mongodb Connected');
        initialized=true;

    } catch (error) {
        console.log('MongoDb Connected Error:', error)
    };
}
import User from '../models/user.model';
import { connect } from '../mongodb/mongoose';

export const createOrUpdateUser = async (
    id,
    first_name,
    last_name,
    image_url,
    email_addresses,
    username,
)=> {
    try {
        await connect();
        const user = await User.findOneAndUpdate(        
            {clerkId:id},
            {
                $set:{
                    firstName: first_name,
                    lastName: last_name,
                    avatar: image_url,
                    email: email_addresses[0].email,
                    username: username,
                },
            },
            {new: true, upsert: true } //return the updated document(if failed work)
        );
        return user;
    } catch (error) {
        console.log('Error Catching or Updating user:', error);
    }
};

export const deleteUser = async (id)=> {
    try {
        await connect();

        await User.findOneAndDelete({
            clerkId: id
        });
    } catch (error) {
        console.log('Error Deleted User:', error)
    }
}
import mongoose from 'mongoose';

const users = new mongoose.Schema({
    name: String,
    email: String,
    address: String,
    bio: String,
    number: Number
});

export default mongoose.model('Users', users);
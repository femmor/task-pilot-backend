import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profile: { type: String },
    settings: { type: Object },
}, {
    timestamps: true,
});

const User = model('User', UserSchema);

export default User;
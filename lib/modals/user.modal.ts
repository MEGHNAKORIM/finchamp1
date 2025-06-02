import {Schema, model, models} from "mongoose";

const UserSchema = new Schema({
    //@ts-ignore
    clerkId: {
        type: String,
        required: String,
        unique: true,
    },
    //@ts-ignore
    email: {
        type: String,
        required: String,
        unique: true,
    },
    //@ts-ignore
    username: {
        type: String,
        unique: true,
    },
    //@ts-ignore
    photo: {
        type: String,
        required: String,
    },
    //@ts-ignore
    firstName: {
        type: String,
    },
    //@ts-ignore
    lastName: {
        type: String,
    },
});

const User = models?.User || model("User", UserSchema);

export default User;
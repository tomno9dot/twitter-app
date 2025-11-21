import mongoose from "mongoose"

const UserSchema = new mongoose({
    username: {
       type: String,
       Unique: true 
    },
    fullname: {
        type: String,
    },
    
    email: {
        type: string,
        Unique: true
    },
    password: {
        type: string,
        minlength: {6},
    }
} timestamps: true)

const User = mongoose.model("User", UserSchema)
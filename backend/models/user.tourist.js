import mongoose from "mongoose";

 export const TouristSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email:{
            type:String,
            required:true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        avatar: {
            type: String,
            required: false,
        }
    },
    {timestamps:true}
 );

 const User = mongoose.model("User",TouristSchema);

 export default User;
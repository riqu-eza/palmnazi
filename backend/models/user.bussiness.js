import mongoose from "mongoose";

const BussinessSchema = mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
        }, bussinesstype:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
        },

        password:{
            type:String,
            required:true,
        },
        title:{
            type:String,
            required:true,
        },
        avatar:{
            type:String,
            required:true,
        }
    }
);

const Bussinessuser = mongoose.model("Bussinessuser",BussinessSchema);

export default Bussinessuser;
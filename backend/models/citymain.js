import mongoose from "mongoose";
 
const Cityschema = mongoose.Schema(

    {
        title:{
            type:String,
            required:true,
        },
        bckimge:{
            type:Array,
            required:true,
        },
        description:{
            type:String,
            required:true,
        }
    }
);

const City = mongoose("City",Cityschema);

export default City;
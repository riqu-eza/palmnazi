import mongoose from "mongoose";

const BussinessSchema = mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
        },
        category:{
            type:String,
            required:false,
        },
        subcategory:{
            type:String,
            required:true,
        },
        description:{
            type:String,
            required:true,
        },
        images:{
            type:array,
            required:true,
        },
        contact:{
            type:Number,
            required:true,
        },
        website:{
            type:String,
            required:true,
        }
        , TimeRanges:{
            type:String,
            required:true,
        }
    },
    {timestamp:true}
);
 const Item = mongoose("Item",ussinessSchema);

 export default Item;
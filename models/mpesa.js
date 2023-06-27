import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
 
 
  amount:{type:Number},
  phone:{type:Number},
  Order_ID:{type:String},
  name:{type:String},
 email:{type:String},
 location:{type:String},
  creator: String,



},
{timestamps:true});

export default mongoose.model("mpesa", messageSchema);

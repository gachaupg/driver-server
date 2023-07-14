import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
 
 
  amount:{type:Number},
  phone:{type:Number},
  Order_ID:{type:String,default:'1235'},
  name:{type:String},
 email:{type:String},
 location:{type:String},
  creator: String,

  status: {
    type: Boolean,
    default:false
    // enum: ['pending', 'active'],
    // default: 'pending'
  },

  isComplete: {type:Boolean , default:false},

},
{timestamps:true});

export default mongoose.model("mpesa", messageSchema);

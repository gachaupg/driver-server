import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {type:String},
  task: {type:String},
  email: { type: String,unique: true},
  password: { type: String },
  tell: { type: String },
  role:{type:String,default:'driver'},
  // phone:{type:Number},
  status: {
    type: Boolean,
    default:false
    // enum: ['pending', 'active'],
    // default: 'pending'
  },
  isComplete: {type:Boolean , default:false},
  isComplete1: {type:Boolean , default:false},

},
{timestamps:true});

export default mongoose.model("User", userSchema);

import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {type:String},
  task: {type:String},
  email: { type: String,unique: true},
  password: { type: String },
  phone: { type: String },
  isSeller: { type: Boolean },
  img: { type: String },
  location: { type: String },
  date:{type:Date},
  // phone:{type:Number},
  status: {
    type: Boolean,
    default:false
    // enum: ['pending', 'active'],
    // default: 'pending'
  },

  isComplete: {type:Boolean , default:false},
  admin: {type:Boolean , default:false},

},
{timestamps:true});

export default mongoose.model("User", userSchema);

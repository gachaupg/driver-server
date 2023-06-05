import mongoose from "mongoose";
const reviewSchema = new mongoose.Schema(
  {
    name: { type: String },
    comment: { type: String },
    rating: { type: Number },
  },
  {
    timestamps: true,
  }
);

const tourSchema = mongoose.Schema({
  name: {type:String},
  
  phone:{type:String},
  address:{type:String},
 
  userId: {
    type: String,
    // required: true,
  },
  picture: {type:String},
  
  status: {
    type: String,
    enum: ['pending', 'success', 'rejected'],
    default: 'pending',
  },
  userId: {
    type: String,
    required: true,
  },
  isComplete: {type:Boolean , default:false},
  countInStock: { type: Number},
task:{type:Number},
rating: { type: Number },
    numReviews: { type: Number},
    reviews: [reviewSchema],
    driverName: String,
    driverTell: String,
  creator: String,
  quiz: String,
  feedback: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  date: { type: Date, default: new Date() },
},
{timestamps:true});

const TourModal = mongoose.model("customer", tourSchema);

export default TourModal;
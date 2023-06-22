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
  item:{type:String},
  infoAdd:{type:String},
  category:{type:String},
  brand:{type:String},
  specifications:{type:String},
  specifications1:{type:String},
  specifications2:{type:String},
  specifications3:{type:String},
  specifications4:{type:String},


  images:{type:Array},
 price:{type:Number},
 age:{type:Number},
 discountPrice:{type:Number},
 description:{type:String},
 discountPercentage:{type:Number},
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
  isComplete: {type:Boolean , default:false},
  countInStock: { type: Number},

rating: { type: Number },
    numReviews: { type: Number},
    reviews: [reviewSchema],
  creator: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  
},
{timestamps:true});

const TourModal = mongoose.model("customer", tourSchema);

export default TourModal;
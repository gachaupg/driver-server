import mongoose from "mongoose";

const tourSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "can't be blank"],
    },
    description: {
      type: String,
    },
    discountPrice: { type: Number },
    brand: { type: String },
    price: {
      type: String,
      required: [true, "can't be blank"],
    },
    picture: { type: String },
    discountPercentage: {
      type: Number,
      min: [1, "wrong min discount"],
      max: [99, "wrong max discount"],
    },
    location: { type: String },
    numberItems: { type: Number },
    age: { type: Number },
    infoAdd: { type: String },
    specifications: { type: String },
    category: {
      type: String,
    },
    rating: {
      type: Number,
      min: [0, "wrong min rating"],
      max: [5, "wrong max price"],
      default: 0,
    },
    stock: { type: Number, min: [0, "wrong min stock"], default: 0 },
    images: {
      type: Array,
    },

    address: { type: String },

    picture: { type: String },

    userId: {
      type: String,
      required: true,
    },
    isComplete: { type: Boolean, default: false },
    countInStock: { type: Number },
    task: { type: Number },
    quiz: { type: String },
    rating: { type: Number },
    numReviews: { type: Number },
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
  { timestamps: true }
);

const TourModal = mongoose.model("customer", tourSchema);

export default TourModal;

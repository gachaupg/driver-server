import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  products: { type: String, required: true, minlength: 3, maxlength: 200 },
  isComplete: {type:Boolean , default:false},
  user: { type: Date, default: new Date() },
},{timestamps:true});

const Todo = mongoose.model("Invoice", todoSchema);

export default Todo;

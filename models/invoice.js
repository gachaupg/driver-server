import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    name: { type: String },
    address: { type: String },
    // role: { type: String },
    phone: { type: String },
    id: { type: String },
    creator: { type: String },
    userId:{type:String}
  },
  { timestamps: true }
);

const Todo = mongoose.model("Invoice", todoSchema);

export default Todo;

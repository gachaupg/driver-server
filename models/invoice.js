import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  products: { 
    name:{type:String},
    task:{type:String},
    role:{type:String},
    email:{type:String},
    tell:{type:String},


},
  isComplete: {type:Boolean , default:false},
  user: [
    {name:{type:String}},
    {address:{type:String}},
    {task:{type:Number}},
    {creator:{type:String}},
    {phone:{type:Number}},
    {picture:{type:String}},
  ],
},{timestamps:true});

const Todo = mongoose.model("Invoice", todoSchema);

export default Todo;

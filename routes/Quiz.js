import Todo from "../models/products.js";
import express from "express";
import Joi from "joi";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find().sort({ date: -1 });
    res.send(todos);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Error: " + error.message);
  }
});

router.post('getbyuser/:id', async(req,res)=>{
  try {
    const { userId } = req.params;
    const post = await Todo.find({ userId });
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
})

router.post("/", auth, async (req, res) => {
  try {
    // const schema = Joi.object({
    //   task: Joi.string().min(3).max(300).required(),
    //   isComplete: Joi.boolean(),
    //   date: Joi.date(),
    // });

    // const { error } = schema.validate(req.body);

    // if (error) return res.status(400).send(error.details[0].message);

    const { task, userId, rating, author, isComplete, date, uid } = req.body;

    let todo = new Todo({
      task,
      author,
      rating,
      isComplete,
      userId: req.userId,
      date,
      uid,
    });

    todo = await todo.save();
    res.send(todo);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  if (!todo) return res.status(404).send("Todo not found...");

  const deletedTodo = await Todo.findByIdAndDelete(req.params.id);

  res.send(deletedTodo);
});

router.put("/test/:id", async (req, res) => {
  const schema = Joi.object({
    task: Joi.string().min(3).max(300),
    isComplete: Joi.boolean(),
    date: Joi.date(),
  });

  const { error } = schema.validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  const todo = await Todo.findById(req.params.id);

  if (!todo) return res.status(404).send("Todo not found...");

  const { status, isComplete, uid } = req.body;

  const updatedTodo = await Todo.findByIdAndUpdate(
    req.params.id,
    // {  isComplete:true, uid},
    { status: true, uid },
    { new: true }
  );

  res.send(updatedTodo);
});

router.put("/:id", async (req, res) => {
  const schema = Joi.object({

    isComplete: Joi.boolean(),
    date: Joi.date(),
  });

  const { error } = schema.validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  const todo = await Todo.findById(req.params.id);

  if (!todo) return res.status(404).send("Todo not found...");

  const { task,quiz, author, isComplete, date, uid } = req.body;

  const updatedTodo = await Todo.findByIdAndUpdate(
    req.params.id,
    { task,quiz, author, isComplete, date, uid },
    { new: true }
  );

  res.send(updatedTodo);
});

export default router;

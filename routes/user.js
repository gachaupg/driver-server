import express from "express";
import { signup, signin, AllUsers, getUser, updateStatusTour, userStatus } from "../controllers/user.js";
import UserModal from "../models/user.js";
import Joi from "joi";

const router = express.Router();


router.post("/signup", signup);
router.post("/signin", signin);
router.get("/", AllUsers);
router.get("/:id", getUser);
router.put("/:id",  userStatus);

router.put("/:id", async (req, res) => {
    const schema = Joi.object({
      task: Joi.string().min(3).max(300).required(),
      isComplete: Joi.boolean(),
      date: Joi.date(),
    });
  
    const { error } = schema.validate(req.body);
  
    if (error) return res.status(400).send(error.details[0].message);
  
    const todo = await UserModal.findById(req.params.id);
  
    if (!todo) return res.status(404).send("UserModal was found...");
  
    const { name, isComplete,  } = req.body;
  
    const updatedTodo = await UserModal.findByIdAndUpdate(
      req.params.id,
      { task, isComplete },
      { new: true }
    );
  
    res.send(updatedTodo);
  });
  
// router.get('/update-status/:id' ,async(req,res)=>{
//     const { id } = req.params;
//     try {
//       const {status}=req.body;
//       await UserModal.findByIdAndUpdate(id,(status));
//       res.send({
//         success:true,
//         message:'updtated successfully'
//       });

//     } catch (error) {
//         res.status(500).json({ message: "Something went wrong" });
//         console.log(error);
//     }
//   })

export default router;
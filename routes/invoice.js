import express from "express";
import auth from "../middleware/auth.js";
import { verifyToken } from "../middleware/jwt.js";
import { createAddress, getAddress, getAdressById } from "../controllers/Invoice.js";

const router = express.Router();

router.get("/search:key", async (req, res) => {
  let result = await TourModal.find({
    $or: [
      {
        houseNo: { $regex: req.params.key },
      },
    ],
  });
  res.send(result);
});

router.get("/", getAddress);
router.get("/:id", getAdressById);
router.get("/userTours/:id", auth, getToursByUser);

// router.get("/:userId/posts",  getToursByUser);
// router.put('/:orderId', updateOrderStatus)
router.post("/", auth, createAddress);
router.delete("/:id", auth, deleteTour);
router.patch("/:id", auth, updateTour);
router.get("/userProjects/:id", auth, getToursByUser);
router.put("/rating/:id", Rating);

export default router;

import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";
const JWT_KEY ='secret'
export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  // const token = req.cookies.accessToken;
  // if (!token) return next(createError(401,"You are not authenticated!"))


  jwt.verify(token, JWT_KEY, async (err, payload) => {
    // if (err) return next(createError(403,"Token is not valid!"))
    req.userId = payload.id;
    req.isSeller = payload.isSeller;
    next()
  });
};

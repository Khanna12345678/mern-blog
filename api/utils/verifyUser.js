import jwt from 'jsonwebtoken';
import { errorHandler } from './error.js';
export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  
  if (!token) {
    return next(errorHandler(401, 'Unauthorized'));
  }
  jwt.verify(token, "bdububcubucb233", (err, user) => {
    if (err) {
      console.log(err);
      return next(errorHandler(401, 'Unauthhhhfuhorized'));
    }
    req.user = user;
    next();
  });
};

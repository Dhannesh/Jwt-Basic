import jwt from "jsonwebtoken";
import BadRequestError from "../errors/BadRequestError.js";
import UnAuthorizedError from "../errors/UnAuthorizedError.js";

const auth = (req, res, next) => {
  //   console.log(req.headers.authorization);
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer "))
    throw new BadRequestError("No token provided");

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decoded;
    req.user = { id, username };
    next();
  } catch (error) {
    throw new UnAuthorizedError("Not authorized to access this route");
  }
};

export default auth;

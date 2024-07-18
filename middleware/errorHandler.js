import CustomAPIError from "../errors/CustomAPIError.js";

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  res.status(500).json({ err: "something went wrong! Try again later" });
};
export default errorHandler;

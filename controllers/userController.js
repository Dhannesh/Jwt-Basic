import jwt from "jsonwebtoken";
import BadRequestError from "../errors/BadRequestError.js";
export const login = (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;

  if (!username || !password) {
    throw new BadRequestError("please provide email and password", 400);
  }
  const id = new Date().getDate();
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  console.log(token);
  //   res.send("fake login/register/signup");
  res.status(200).json({ msg: "user created", token });
};

export const dashboard = (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello ${req.user.username}`,
    secret: `Here is your authorized data, Your lucky number is ${luckyNumber}`,
  });
};

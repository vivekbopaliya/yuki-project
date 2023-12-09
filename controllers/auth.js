import jwt from "jsonwebtoken";

import bcrypt from "bcrypt";
import { AuthModal } from "../model/user.js";
export const Register = async (req, res) => {
  const {
    name,
    email,
    password,
    contactNumber,
    address,
    state,
    pincode,
    country,
  } = req.body;

  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(password, salt, async function (err, hash) {
      const newUser = new AuthModal({
        name,
        email,
        password: hash,
        contactNumber,
        address,
        state,
        pincode,
        country,
      });

      await newUser.save();

      return res.json(newUser);
    });
  });
};

export const Login = async (req, res) => {
  const { email, password } = req.body;
  const user = await AuthModal.findOne({ email });

  if (!user) {
    return res.json({ msg: "User doesn't exist, please sign up first!" });
  }

  const token = jwt.sign({ id: user._id }, "fdfjkdhfjkdshfkjdshfkjdshfkj");
  return res.json({
    token: token,
    userID: user._id,
    msg: "Login successfully",
  });
};

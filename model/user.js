import mongoose from "mongoose";

const AuthSchema = new mongoose.Schema({
  name: String,
  email: String,
  contactNumber: Number,
  password: String,
  address: String,
  state: String,
  pincode: Number,
  country: String,
});

export const AuthModal = mongoose.model("users", AuthSchema);

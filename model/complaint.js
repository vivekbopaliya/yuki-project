import mongoose from "mongoose";

const AuthSchema = new mongoose.Schema({
  user: String,
  complaintName: String,

  complaintType: {
    type: String,
  },
  registrationDate: {
    type: Date,
  },
  complaintDescription: {
    type: String,
  },
  incidentLocation: String,
  complainantAddress: String,
});

export const ComplaintsModel = mongoose.model("complaints", AuthSchema);

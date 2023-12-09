import { ComplaintsModel } from "../model/complaint.js";

export const CreateComplaints = async (req, res) => {
  try {
    const {
      user,
      complaintName,
      complaintType,
      complaintDescription,
      registrationDate,
      incidentLocation,
      complainantAddress,
    } = req.body;
    const newComplaints = await ComplaintsModel.create({
      user,
      complaintName,
      complaintType,
      complaintDescription,
      registrationDate,
      incidentLocation,
      complainantAddress,
    });
    await newComplaints.save();
    return res.json("ok");
  } catch (error) {
    console.log(error);
  }
};

export const AllComplaints = async (req, res) => {
  try {
    const all = await ComplaintsModel.find();

    return res.json(all);
  } catch (error) {
    console.log(error);
  }
};

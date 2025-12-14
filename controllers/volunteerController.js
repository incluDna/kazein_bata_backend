import Volunteer from "../models/Volunteer.js";

export const getVolunteer = async (req, res) => {
  const data = await Volunteer.find();
  res.json(data);
};

export const addVolunteer = async (req, res) => {
  const newData = new Volunteer(req.body);
  await newData.save();
  res.json({ message: "Added", data: newData });
};

import Travelling from "../models/Travelling.js";

export const getTravelling = async (req, res) => {
  const data = await Travelling.find();
  res.json(data);
};

export const addTravelling = async (req, res) => {
  const newData = new Travelling(req.body);
  await newData.save();
  res.json({ message: "Added", data: newData });
};

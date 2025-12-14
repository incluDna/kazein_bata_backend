import Prevention from "../models/Prevention.js";

export const getPreventions = async (req, res) => {
  const data = await Prevention.find();
  res.json(data);
};

export const addPrevention = async (req, res) => {
  const newData = new Prevention(req.body);
  await newData.save();
  res.json({ message: "Added", data: newData });
};

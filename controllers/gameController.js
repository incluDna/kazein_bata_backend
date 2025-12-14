import Game from "../models/Game.js";

export const getGames = async (req, res) => {
  const data = await Game.find();
  res.json(data);
};

export const addGame = async (req, res) => {
  const newData = new Game(req.body);
  await newData.save();
  res.json({ message: "Added", data: newData });
};

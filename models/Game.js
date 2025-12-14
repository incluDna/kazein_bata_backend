import mongoose from "mongoose";

const GameSchema = new mongoose.Schema({
  title: String,
  level: String,
  image: String,
  link: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Game", GameSchema);

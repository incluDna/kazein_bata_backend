import mongoose from "mongoose";

const PreventionSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  link: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Prevention", PreventionSchema);

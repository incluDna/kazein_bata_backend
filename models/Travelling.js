import mongoose from "mongoose";

const TravellingSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  image: String,
  link: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Travelling", TravellingSchema);

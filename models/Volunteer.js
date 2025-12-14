import mongoose from "mongoose";

const VolunteerSchema = new mongoose.Schema({
  title: String,
  description: String,
  minAge: Number,
  maxAge: Number,
  price: Number,
  image: String,
  link: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Volunteer", VolunteerSchema);

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Connect DB
connectDB();

// Routes
import volunteerRoutes from "./routes/volunteer.js";
import travellingRoutes from "./routes/travelling.js";
import preventionRoutes from "./routes/preventions.js";
import gameRoutes from "./routes/games.js";

app.use("/api/volunteer", volunteerRoutes);
app.use("/api/travelling", travellingRoutes);
app.use("/api/preventions", preventionRoutes);
app.use("/api/games", gameRoutes);

/* ---------- สำคัญ ---------- */
export default app;

/* ---------- รันเฉพาะ local ---------- */
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
  );
}

import "./config/env.js";

import cors from "cors";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { connectDB } from "./config/db.js";
import messageRoutes from "./routes/message.route.js";
import projectRoutes from "./routes/project.route.js";

const app = express();

const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3001",
    credentials: true,
  }),
);

app.use(express.json());
app.use("/api/projects", projectRoutes);
app.use("/api/message", messageRoutes);


const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(`Database connection failed: ${error.message}`);
    process.exit(1);
  }
};

startServer();

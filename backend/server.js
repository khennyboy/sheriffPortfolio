import "./config/env.js";

import express from "express";
import path, { dirname } from "path";
import cors from "cors";
import { fileURLToPath } from "url";
import projectRoutes from "./routes/project.route.js";
import contactRoutes from "./routes/contact.route.js";
import { connectDB } from "./config/db.js";

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
app.use("/api/contact", contactRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend/dist")));

  app.get("/*splat", (_, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
  });
}

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

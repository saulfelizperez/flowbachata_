import express from "express";
import cors from "cors";

import userRoutes from "./routes/user.routes";
import authRoutes from "./routes/auth.routes";
import progressRoutes from "./routes/progress.routes";

const app = express();

// Middlewares globales
app.use(cors());
app.use(express.json());

// Health check
app.get("/api/v1/health", (req, res) => {
  res.json({ status: "OK", message: "FlowBachata API running" });
});

// Routes
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/progress", progressRoutes);

export default app;
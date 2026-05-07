import express from "express";
import cors from "cors";

import progressRoutes from "./routes/progress.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", progressRoutes);

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
import express from "express";
import cors from "cors";
import taskRoutes from "./routes/taskRoutes";
import { sequelize } from "./models";

const app = express();
const port = 8000;

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

app.use("/api", taskRoutes);

sequelize
  .sync()
  .then(() => {
    console.log("Database connected");
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Couldn't connect to database:", err);
  });

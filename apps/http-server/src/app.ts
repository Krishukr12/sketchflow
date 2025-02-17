import express from "express";
import cors from "cors";
import { userRouter } from "./routes/v1/userRouter.js";
import { globalErrorHandler } from "./utils/globalError.js";

const PORT = process.env.PORT ?? 8080;
const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome!");
});

//User Routes
app.use("/api/v1/user", userRouter);

app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`🚀 Server started successfully!`);
  console.log(`🌐 Server is running on http://localhost:${PORT}`);
});

import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";
import messageRoute from "./routes/message.route.js";
import { connectToMongoDB } from "./lib/db.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoute);

app.listen(PORT, () => {
  console.log("Server is listening on Port: " + PORT);
});

connectToMongoDB();

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { login } from "./controllers/auth.controller";
import { authMiddleware, AuthRequest } from "./middleware/auth.middleware";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  })
);

app.post("/login", login);

app.get("/profile", authMiddleware, (req: AuthRequest, res) => {
  res.json({ user: req.user });
});

app.post("/logout", (_req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

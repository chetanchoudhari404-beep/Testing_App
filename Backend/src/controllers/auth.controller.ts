import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

interface User {
  id: number;
  email: string;
  password: string;
}

const users: User[] = [
  {
    id: 1,
    email: "test@mail.com",
    password: bcrypt.hashSync("123456", 10)
  }
];

export const login = (req: Request, res: Response): Response => {
  const { email, password } = req.body as {
    email: string;
    password: string;
  };

  const user = users.find(u => u.email === email);
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const isValid = bcrypt.compareSync(password, user.password);
  if (!isValid)
    return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET as string,
    { expiresIn: "1h" }
  );

  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "strict",
    secure: false // true in prod
  });

  return res.json({ message: "Login success" });
};

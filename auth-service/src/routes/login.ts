import { Request, Response } from "express";
import { comparePassword } from "../utils/hash";
import { signToken } from "../utils/jwt";
import { prisma } from "../../../db/prismaClient";

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ error: "Missing fields" });

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return res.status(401).json({ error: "Invalid credentials" });

  const valid = await comparePassword(password, user.password);
  if (!valid) return res.status(401).json({ error: "Invalid credentials" });

  const token = signToken({ userId: user.id, email: user.email });
  res.json({ token });
};

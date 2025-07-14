import { Request, Response } from "express";

import { hashPassword } from "../utils/hash";
import { prisma } from "../../../db/prismaClient";

export const signup = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ error: "Missing fields" });

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) return res.status(409).json({ error: "User already exists" });

  const hashed = await hashPassword(password);
  const user = await prisma.user.create({
    data: { email, password: hashed },
  });

  res.status(201).json({ id: user.id, email: user.email });
};

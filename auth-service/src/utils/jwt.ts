import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret"; // Use env var in production

export const signToken = (payload: object): string =>
  jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });

export const verifyToken = (token: string): JwtPayload =>
  jwt.verify(token, JWT_SECRET) as JwtPayload;

export interface JwtPayload {
  userId: string;
  email: string;
  iat?: number;
  exp?: number;
}

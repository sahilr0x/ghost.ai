import express from "express";
import { signup } from "./routes/signup";
import { login } from "./routes/login";
import { requireAuth } from "./middleware/auth";
import { JwtPayload } from "./utils/jwt";

const app = express();
app.use(express.json());

app.post("/signup", signup);
app.post("/login", login);

// Protect all routes below this middleware
app.use(requireAuth);

// Example protected route
app.get("/me", (req: express.Request & { user?: JwtPayload }, res) => {
  res.json({ user: req.user });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Auth service running on port ${PORT}`);
});

import { auth } from "../config/firebase";

export const verifyToken = async (req, res, next) => {
  try {
    const header = req.headers.authorization;

    if (!header) {
      return res.status(401).json({ error: "No token provided" });
    }

    const token = header.split("Bearer ")[1];

    const decoded = await auth.verifyIdToken(token);

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
};
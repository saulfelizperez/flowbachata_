import { auth } from "../config/firebase";

export const verifyToken = async (req: any, res: any, next: any) => {
  try {
    const header = req.headers.authorization;

    if (!header || !header.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = header.split(" ")[1];

    const decoded = await auth.verifyIdToken(token);

    req.user = decoded; // aquí tienes uid real

    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
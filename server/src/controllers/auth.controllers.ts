import { auth } from "../config/firebase";

// 🔐 Obtener usuario actual desde token
export const getCurrentUser = async (req, res) => {
  try {
    const header = req.headers.authorization;

    if (!header) {
      return res.status(401).json({ error: "No token provided" });
    }

    const token = header.split("Bearer ")[1];

    const decoded = await auth.verifyIdToken(token);

    return res.json({
      uid: decoded.uid,
      email: decoded.email,
      name: decoded.name || null,
    });
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
};
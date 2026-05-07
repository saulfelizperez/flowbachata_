import { auth } from "../config/firebase";

// ==========================
// REGISTER (YA NO MOCK)
// ==========================
export const registerUser = async (req, res) => {
  return res.status(501).json({
    error: "Use Firebase Client SDK in frontend to register users",
  });
};

// ==========================
// LOGIN (YA NO MOCK)
// ==========================
export const loginUser = async (req, res) => {
  return res.status(501).json({
    error: "Use Firebase Client SDK in frontend to login users",
  });
};

// ==========================
// ME (REAL)
// ==========================
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
    });
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
};
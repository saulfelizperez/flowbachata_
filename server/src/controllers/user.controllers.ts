import { db } from "../config/firebase";

// GET user
export const getUser = async (req, res) => {
  try {
    const doc = await db.collection("users").doc(req.params.id).get();

    if (!doc.exists) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.json({
      id: doc.id,
      ...doc.data(),
    });
  } catch (error) {
    return res.status(500).json({ error: "Server error" });
  }
};

// CREATE user
export const createUser = async (req, res) => {
  try {
    const { id, name, email, role } = req.body;

    if (!id || !email) {
      return res.status(400).json({ error: "Missing fields" });
    }

    await db.collection("users").doc(id).set({
      name: name || "",
      email,
      role: role || "leader",
      level: "beginner",
      createdAt: new Date(),
    });

    return res.status(201).json({ message: "User created" });
  } catch (error) {
    return res.status(500).json({ error: "Server error" });
  }
};
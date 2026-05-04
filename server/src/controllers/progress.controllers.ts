import { db } from "../config/firebase";

// GET progress
export const getProgress = async (req, res) => {
  try {
    const doc = await db.collection("progress").doc(req.params.userId).get();

    if (!doc.exists) {
      return res.status(404).json({ error: "No progress found" });
    }

    return res.json(doc.data());
  } catch (error) {
    return res.status(500).json({ error: "Server error" });
  }
};

// UPDATE progress
export const updateProgress = async (req, res) => {
  try {
    const { timing, connection, musicality } = req.body;

    await db.collection("progress").doc(req.params.userId).set(
      {
        timing,
        connection,
        musicality,
        updatedAt: new Date(),
      },
      { merge: true }
    );

    return res.json({ message: "Progress updated" });
  } catch (error) {
    return res.status(500).json({ error: "Server error" });
  }
};
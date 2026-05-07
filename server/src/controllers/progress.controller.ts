import { db } from "../config/firebase";

/**
 * GET /progress
 */
export const getProgress = async (req: any, res: any) => {
  try {
    const userId = req.user.uid;

    const doc = await db.collection("progress").doc(userId).get();

    if (!doc.exists) {
      return res.status(404).json({ message: "Progress not found" });
    }

    return res.json({
      data: doc.data(),
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

/**
 * PUT /progress
 */
export const updateProgress = async (req: any, res: any) => {
  try {
    const userId = req.user.uid;

    await db.collection("progress").doc(userId).set(req.body, {
      merge: true,
    });

    const updated = await db.collection("progress").doc(userId).get();

    return res.json({
      data: updated.data(),
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};
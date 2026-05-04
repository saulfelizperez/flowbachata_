import { db } from "../config/firebase";

export const getProgressByUserId = async (userId: string) => {
  const doc = await db.collection("progress").doc(userId).get();

  if (!doc.exists) {
    return null;
  }

  return doc.data();
};

export const updateProgress = async (
  userId: string,
  data: {
    timing?: number;
    connection?: number;
    musicality?: number;
  }
) => {
  await db.collection("progress").doc(userId).set(
    {
      ...data,
      updatedAt: new Date(),
    },
    { merge: true }
  );

  return { success: true };
};
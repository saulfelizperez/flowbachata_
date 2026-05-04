import { db } from "../config/firebase";

export const getUserById = async (id: string) => {
  const doc = await db.collection("users").doc(id).get();

  if (!doc.exists) {
    return null;
  }

  return {
    id: doc.id,
    ...doc.data(),
  };
};

export const createUser = async (data: {
  id: string;
  name?: string;
  email: string;
  role?: string;
}) => {
  await db.collection("users").doc(data.id).set({
    name: data.name || "",
    email: data.email,
    role: data.role || "leader",
    level: "beginner",
    createdAt: new Date(),
  });

  return { success: true };
};
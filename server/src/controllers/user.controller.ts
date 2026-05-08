import { db } from "../config/firebase";

/**
 * GET ALL USERS
 */
export const getUsers = async (req, res) => {
  try {
    const snapshot = await db.collection("users").get();

    const users = snapshot.docs.map((doc) => ({
      uid: doc.id,
      ...doc.data(),
    }));

    return res.json({
      success: true,
      data: users,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

/**
 * GET USER BY UID
 */
export const getUser = async (req, res) => {
  try {
    console.log("REQ.PARAMS:", req.params);

    const { uid } = req.params;

    if (!uid) {
      return res.status(400).json({
        error: "UID is required",
      });
    }

    const doc = await db.collection("users").doc(uid).get();

    if (!doc.exists) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.json({
      success: true,
      data: {
        uid: doc.id,
        ...doc.data(),
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

/**
 * CREATE USER
 */
export const createUser = async (req, res) => {
  try {
    console.log("REQ.BODY:", req.body);

    const { uid, name, email } = req.body;

    if (!uid || !email) {
      return res.status(400).json({
        error: "Missing fields (uid and email required)",
      });
    }

    await db.collection("users").doc(uid).set({
      name: name || "",
      email,
      createdAt: new Date(),
    });

    return res.status(201).json({
      success: true,
      message: "User created",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

/**
 * UPDATE USER
 */
export const updateUser = async (req, res) => {
  try {
    console.log("REQ.PARAMS:", req.params);
    console.log("REQ.BODY:", req.body);

    const { uid } = req.params;

    if (!uid) {
      return res.status(400).json({
        error: "UID is required",
      });
    }

    const docRef = db.collection("users").doc(uid);
    const doc = await docRef.get();

    if (!doc.exists) {
      return res.status(404).json({ error: "User not found" });
    }

    await docRef.update(req.body);

    const updated = await docRef.get();

    return res.json({
      success: true,
      data: {
        uid: updated.id,
        ...updated.data(),
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

/**
 * DELETE USER
 */
export const deleteUser = async (req, res) => {
  try {
    console.log("REQ.PARAMS:", req.params);
    console.log("UID RECIBIDO:", req.params.uid);

    const { uid } = req.params;

    if (!uid) {
      return res.status(400).json({
        error: "UID is required in URL (/:uid)",
      });
    }

    const docRef = db.collection("users").doc(uid);
    const doc = await docRef.get();

    if (!doc.exists) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    await docRef.delete();

    return res.json({
      success: true,
      message: `User ${uid} deleted`,
    });
  } catch (error) {
    console.error("DELETE ERROR:", error);
    return res.status(500).json({ error: error.message });
  }
};
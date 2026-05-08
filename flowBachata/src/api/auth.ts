import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

export const loginUser = async (email: string, password: string) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

  const token = await userCredential.user.getIdToken();

  return {
    token,
    uid: userCredential.user.uid,
    email: userCredential.user.email,
  };
};
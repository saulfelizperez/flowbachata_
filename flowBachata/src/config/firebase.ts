import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAcfAFxaQhg2BgxaT4crf8qz6mI-edJpoA",
  authDomain: "flow-bachata.firebaseapp.com",
  projectId: "flow-bachata",
  storageBucket: "flow-bachata.firebasestorage.app",
  messagingSenderId: "857274889453",
  appId: "1:857274889453:web:6613fdc12ab02f269908e4",
};

const app = initializeApp(firebaseConfig);

// SOLO lo que necesitas para auth
export const auth = getAuth(app);
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { auth } from "../firebaseconfig";

export const LoginAPI = (email, password) => {
  try {
    return signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    return error;
  }
};

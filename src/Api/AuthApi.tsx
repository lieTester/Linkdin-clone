import {
   signInWithEmailAndPassword,
   createUserWithEmailAndPassword,
   GoogleAuthProvider,
   signInWithPopup,
   AuthError,
} from "firebase/auth";
import { auth } from "../../firebaseconfig";
import { UserCredential } from "firebase/auth";

export const LoginAPI = async (
   email: string,
   password: string
): Promise<UserCredential | AuthError> => {
   try {
      return await signInWithEmailAndPassword(auth, email, password);
   } catch (error) {
      return error as AuthError;
   }
};

export const RegisterAPI = async (
   email: string,
   password: string
): Promise<UserCredential | AuthError> => {
   try {
      return await createUserWithEmailAndPassword(auth, email, password);
   } catch (error) {
      return error as AuthError;
   }
};

export const GoogleAuthAPI = async (): Promise<UserCredential | AuthError> => {
   try {
      const googleAuthProvider = new GoogleAuthProvider();
      return await signInWithPopup(auth, googleAuthProvider);
   } catch (error) {
      return error as AuthError;
   }
};

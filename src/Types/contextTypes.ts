import { Dispatch, SetStateAction } from "react";
import { User } from "firebase/auth";

export type AuthContextProps = {
   user: User | null;
   setUser: Dispatch<SetStateAction<User | null>>; // Include setUser
};

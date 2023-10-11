import { Dispatch, SetStateAction } from "react";
import { User } from "firebase/auth";

export type AuthContextProps = {
   user: User | undefined | null;
   setUser: Dispatch<SetStateAction<User | undefined | null>>; // Include setUser
};

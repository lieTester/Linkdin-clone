import React, { useState, createContext, ReactNode } from "react";
import { User } from "firebase/auth";
import { AuthContextProps } from "../types/contextTypes";

export const AuthContext = createContext<AuthContextProps | undefined>(
   undefined
);

type AuthProviderProps = {
   children: ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
   // for undefine will check from auth call but if null means no session
   const [user, setUser] = useState<User | undefined | null>(undefined);

   return (
      <AuthContext.Provider value={{ user, setUser }}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthContext;

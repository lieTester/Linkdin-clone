import React, { useState, createContext, ReactNode } from "react";
import { User } from "firebase/auth";
import { AuthContextProps } from "../Types/contextTypes";

export const AuthContext = createContext<AuthContextProps | undefined>(
   undefined
);

type AuthProviderProps = {
   children: ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
   const [user, setUser] = useState<User | null>(null);

   return (
      <AuthContext.Provider value={{ user, setUser }}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthContext;

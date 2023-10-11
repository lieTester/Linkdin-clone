import { useEffect, useContext } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { auth } from "../../firebaseconfig";
import AuthContext from "../context/AuthProvider";
import LoadingPage from "./subComponents/LoderComponent";

const VerifyComponent = () => {
   const contextValue = useContext(AuthContext);
   const user = contextValue?.user;
   const setUser = contextValue?.setUser;
   const location = useLocation();

   useEffect(() => {
      auth.onAuthStateChanged((res) => {
         //    // Set the user state
         if (setUser) {
            setUser(res);
            // console.log(res, user, auth);
         }
      });
   }, [user]);
   return (
      <>
         {user !== undefined ? (
            user?.email ? (
               <Outlet />
            ) : (
               <Navigate to="/login" state={{ from: location }} replace />
            )
         ) : (
            <LoadingPage />
         )}
      </>
   );
};

export default VerifyComponent;

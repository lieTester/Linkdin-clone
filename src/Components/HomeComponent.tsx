import { useEffect, useContext } from "react";
import Header from "./subComponents/Header";
import { auth } from "../../firebaseconfig";
import { getAuth } from "firebase/auth"; // Import User type
import AuthContext from "../Context/AuthProvider";
import LoadingPage from "./subComponents/LoderComponent";
import LoginComponent from "./LoginComponent";

function HomeComponent() {
   const contextValue = useContext(AuthContext);
   const user = contextValue?.user;
   const setUser = contextValue?.setUser;

   useEffect(() => {
      auth.onAuthStateChanged((res) => {
         //    // Set the user state
         if (setUser && res) setUser(res);
         console.log(res, user);
      });
   }, [getAuth]);

   return (
      <>
         {user !== null ? (
            user?.email ? (
               <section className="min-h-screen pt-10 bg-[#F4F2EE]">
                  {user?.email && <Header />}
               </section>
            ) : (
               <LoginComponent />
            )
         ) : (
            <LoadingPage />
         )}
      </>
   );
}

export default HomeComponent;

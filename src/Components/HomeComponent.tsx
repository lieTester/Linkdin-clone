import { useEffect, useContext } from "react";
import Header from "./subComponents/Header";
import { auth } from "../../firebaseconfig";
import { getAuth } from "firebase/auth"; // Import User type
import AuthContext from "../Context/AuthProvider";

function HomeComponent() {
   const contextValue = useContext(AuthContext);
   const user = contextValue?.user;
   const setUser = contextValue?.setUser;

   useEffect(() => {
      // const authInstance = getAuth(); // Rename to authInstance to avoid conflict with imported auth
      console.log(auth);
      // authInstance.onAuthStateChanged((res) => {
      //    console.log(res);
      //    if (setUser && res) setUser(res);
      //    // Set the user state
      // });

      console.log(user);
   }, [getAuth]);

   return (
      <>
         {user ? (
            <section className="min-h-screen pt-10 bg-[#F4F2EE]">
               {user?.email && <Header />}
            </section>
         ) : (
            <div> can't login</div>
         )}
      </>
   );
}

export default HomeComponent;

/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import HomeComponent from "../components/HomeComponent";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseconfig";
import { onAuthStateChanged } from "firebase/auth";
export default function Login() {
   const navigate = useNavigate();
   useEffect(() => {
      onAuthStateChanged(auth, (res) => {
         if (!res?.accessToken) {
            navigate("/login");
         }
      });
   }, []);

   return <HomeComponent />;
}

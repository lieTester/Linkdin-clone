/* eslint-disable no-unused-vars */

import LoginComponent from "../components/LoginComponent";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseconfig";
import { onAuthStateChanged } from "firebase/auth";
export default function Login() {
   const navigate = useNavigate();
   useEffect(() => {
      onAuthStateChanged(auth, (res) => {
         if (res?.accessToken) {
            navigate("/");
         }
      });
   }, []);
   return <LoginComponent />;
}

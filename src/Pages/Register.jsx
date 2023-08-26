/* eslint-disable no-unused-vars */

import RegisterComponent from "../components/RegisterComponent";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseconfig";
import { onAuthStateChanged } from "firebase/auth";

export default function Signup() {
   const navigate = useNavigate();
   useEffect(() => {
      onAuthStateChanged(auth, (res) => {
         if (res?.accessToken) {
            navigate("/");
         }
      });
   }, []);
   return <RegisterComponent />;
}

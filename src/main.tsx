import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./input.css";
import Login from "./Components/LoginComponent";
import Signup from "./Components/RegisterComponent";
import Home from "./Components/HomeComponent";
import { AuthProvider } from "./context/AuthProvider";
import VerifyComponent from "./Components/VerifyComponent";

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <BrowserRouter>
         <AuthProvider>
            <Routes>
               <Route path="/login" element={<Login />} />
               <Route path="/register" element={<Signup />} />
               <Route path="/" element={<VerifyComponent />}>
                  <Route path="/" element={<Home />} />
               </Route>
            </Routes>
         </AuthProvider>
      </BrowserRouter>
   </React.StrictMode>
);

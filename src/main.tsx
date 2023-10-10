import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./input.css";
import Login from "./Components/LoginComponent";
import Signup from "./Components/RegisterComponent";
import Home from "./Components/HomeComponent";
import { AuthProvider } from "./Context/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <BrowserRouter>
         <AuthProvider>
            <Routes>
               <Route path="/login" element={<Login />} />
               <Route path="/register" element={<Signup />} />
               <Route path="/" element={<Home />} />
            </Routes>
         </AuthProvider>
      </BrowserRouter>
   </React.StrictMode>
);

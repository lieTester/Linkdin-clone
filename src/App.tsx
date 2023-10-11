import { Routes, Route } from "react-router-dom";
import Login from "./pages/LoginComponent";
import Signup from "./pages/RegisterComponent";
import Home from "./pages/HomeComponent";
import VerifyComponent from "./components/VerifyComponent";
const App = () => {
   return (
      <>
         <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/" element={<VerifyComponent />}>
               <Route path="/" element={<Home />} />
            </Route>
         </Routes>
      </>
   );
};

export default App;

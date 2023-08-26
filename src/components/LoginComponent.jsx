import logo from "../assets/images/LinkedIn_Logo.svg";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaLinkedin, FaRegCopyright } from "react-icons/fa";
import { GoogleAuthAPI, LoginAPI } from "../Api/AuthApi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginComponent() {
   const navigate = useNavigate();
   const [credentials, setCredentials] = useState({ email: "", password: "" });

   const login = async (e) => {
      e.preventDefault();
      try {
         console.log(credentials.email, credentials.password);

         let res = await LoginAPI(credentials.email, credentials.password);
         navigate("/");
         console.log(res);
      } catch (error) {
         console.log(error);
      }
   };
   const googleSignIn = (e) => {
      e.preventDefault();
      try {
         console.log("Signing in...");
         let res = GoogleAuthAPI();
         console.log(res);
         navigate("/");
      } catch (error) {
         console.error(error);
      }
   };
   return (
      <section className="w-full h-screen p-7 pb-0 font-[system-ui]">
         <header className="w-[90%] md:w-[70%] ">
            <img
               src={logo}
               alt="LinkedIn-logo"
               className=" w-auto h-8 md:h-10"
            />
         </header>
         {/* ---------------------------main -------------------------------------- */}
         <main className=" w-[100%] h-[70%] md:w-[70%] mt-6 mx-auto ">
            {/* {------------------------------- form    ---------------------------------} */}
            <section className="block w-[100%]  md:w-[350px] !mx-auto md:p-6 py-7 rounded-lg md:shadow-[0_4px_12px_0px_rgba(0,0,0,0.15)]">
               <div className="mb-6">
                  <h1 className=" font-semibold text-3xl">Sign in</h1>
                  <h3 className="mt-2 text-[14px] ">
                     Stay updated on your professional world
                  </h3>
               </div>
               <div className="relative w-full h-12 mb-6 rounded-[4px] z-10  outline outline-1 outline-slate-900 focus-within:outline-2 focus-within:outline-[#0A66C2]   ">
                  <input
                     type="text"
                     name=""
                     id="email"
                     placeholder=" "
                     value={credentials.email}
                     onChange={(e) => {
                        setCredentials({
                           ...credentials,
                           email: e.target.value,
                        });
                     }}
                     className="absolute w-full h-full z-[2] rounded-[4px] bg-transparent pl-3 pt-4 pb-1 outline-none [&:focus~label]:!mt-[1px] [&:not(:placeholder-shown)~label]:!mt-[1px]  [&:focus~label]:text-gray-900 [&:not(:placeholder-shown)~label]:text-gray-900 [&:not(:placeholder-shown)~label]:text-[14px]  [&:focus~label]:text-[14px] "
                  />
                  <label
                     htmlFor=""
                     className="absolute pl-3 z-[-1] mt-[10px] text-[18px] transition-[all] duration-[.2s] text-gray-600"
                  >
                     Email or Phone
                  </label>
               </div>
               <div className="relative w-full h-12 mb-2 rounded-[4px] z-10  outline outline-1 outline-slate-900 focus-within:outline-2 focus-within:outline-[#0A66C2]   ">
                  <input
                     type="password"
                     name=""
                     id="password"
                     placeholder=" "
                     value={credentials.password}
                     onChange={(e) => {
                        setCredentials({
                           ...credentials,
                           password: e.target.value,
                        });
                     }}
                     className="absolute w-full h-full z-[2] rounded-[4px] bg-transparent pl-3 pr-16 pt-4 pb-1 outline-none [&:focus~label]:!mt-[1px] [&:not(:placeholder-shown)~label]:!mt-[1px]  [&:focus~label]:text-gray-900 [&:not(:placeholder-shown)~label]:text-gray-900 [&:not(:placeholder-shown)~label]:text-[14px]  [&:focus~label]:text-[14px] "
                  />
                  <label
                     htmlFor=""
                     className="absolute pl-3 z-[-1] mt-[10px] text-[18px] transition-[all] duration-[.2s] text-gray-600"
                  >
                     Password
                  </label>
                  <button
                     onClick={(e) => {
                        e.preventDefault();
                     }}
                     className="absolute right-2 mt-3 px-2 text-[#0A66C2] font-semibold z-10 text-[14px] cursor-pointer rounded-full hover:bg-[#D0E8FF] focus:bg-[#D0E8FF] focus:outline focus:outline-2 focus:outline-[0A66C2]"
                  >
                     show
                  </button>
               </div>
               <label htmlFor="" className="text-[#0A66C2] font-semibold">
                  <a href="#">Forgot Password ?</a>
               </label>
               <div>
                  <button
                     onClick={login}
                     className="text-[16px] w-full mt-6 py-3 text-white rounded-full bg-[#0A66C2]  hover:bg-[#004182]"
                  >
                     Sign in
                  </button>
               </div>
               <div className="relative my-4">
                  <hr className="border-[1px] border-gray-300  " />
                  <span className="absolute text-gray-400 w-14 -top-[14px] right-[43%] bg-white  text-center">
                     or
                  </span>
               </div>
               <div className="relative text-gray-500 text-[16px] font-semibold">
                  <button
                     onClick={googleSignIn}
                     className="w-full py-1  rounded-full outline outline-1 outline-gray-400 hover:bg-slate-100 hover:ring-2 hover:ring-[#616161] hover:-outline-offset-[.5px]  hover:outline-[#616161] transition-all duration-300"
                  >
                     <FcGoogle className="inline text-[18px] mb-1 mr-1" /> Sign
                     in with Google
                  </button>
                  <button className="w-full mt-3 py-1  rounded-full outline outline-1 outline-gray-400 hover:bg-slate-100 hover:ring-2 hover:ring-[#616161] hover:-outline-offset-[.5px]  hover:outline-[#616161] transition-all duration-300">
                     <FaApple className="inline text-[20px] mb-1 mr-2 text-black" />
                     Sign in with Apple
                  </button>
               </div>
            </section>
            <div></div>
         </main>
         <footer className="h-auto md:!h-[calc(100%-70%-9%)] pt-8 ">
            <div className="w-full text-center ">
               New to LinkedIn?{" "}
               <a href="" className="text-[#0A66C2] font-semibold">
                  Join now
               </a>
            </div>

            <ul className="hidden md:flex justify-center mt-11 text-[12px] text-gray-600 [&>li]:px-3 [&>li]:hover:cursor-pointer [&>li:hover]:underline">
               <li className="text-black ">
                  <span className="font-bold  text-[14px]">Linked</span>
                  <FaLinkedin className="inline text-[15px] mb-1 mr-2 ml-[1px]" />
                  <FaRegCopyright className="inline mb-3 mr-2 font-extralight" />
                  2023
               </li>
               <li>User Agreement</li>
               <li> Privacy Policy</li>
               <li> Community Guidelines</li>
               <li> Cookie Policy</li>

               <li> Copyright Policy</li>
               <li> Send Feedback</li>
               <li> Language</li>
            </ul>
         </footer>
      </section>
   );
}

export default LoginComponent;

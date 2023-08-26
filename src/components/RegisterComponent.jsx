import { useNavigate } from "react-router-dom";
import { FaLinkedin, FaRegCopyright } from "react-icons/fa";
import { GoogleAuthAPI, RegisterAPI } from "../Api/AuthApi";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import logo from "../assets/images/LinkedIn_Logo.svg";

function RegisterComponent() {
   const navigate = useNavigate();
   const [credentials, setCredentials] = useState({ email: "", password: "" });
   const register = () => {
      try {
         console.log("Register");
         let res = RegisterAPI(credentials.email, credentials.password);
         // if (res.statusCode == 200)
         console.log(res);
      } catch (error) {
         console.log(error);
      }
   };
   const googleSignIn = () => {
      try {
         console.log("Signing in...");
         let res = GoogleAuthAPI();
         console.log(res);
      } catch (error) {
         console.error(error);
      }
   };
   return (
      <section className="w-full h-screen  pb-0 font-[system-ui]  md:!bg-[#F3F2F0]">
         <header className="w-[90%] md:w-[70%] mx-auto pt-5">
            <img
               src={logo}
               alt="LinkedIn-logo"
               className=" w-auto h-7 md:h-10"
            />
         </header>
         {/* ---------------------------main -------------------------------------- */}
         <main className=" w-[100%] h-[70%] md:w-[70%] mx-auto">
            {/* {------------------------------- form    ---------------------------------} */}
            <div className="w-full text-center text-3xl leading-10 py-5">
               {/* accordnig to screen size message display */}
               <span className="hidden md:block">
                  Make the most of your professional life
               </span>
               <span className="md:hidden text-2xl font-semibold">
                  Join LinkedIn now — it’s free!
               </span>
            </div>
            <section className="block w-[100%] sm:w-[400px]  !mx-auto p-6 py-7 bg-white rounded-lg md:shadow-[0_4px_12px_0px_rgba(0,0,0,0.15)]">
               <div className="relative w-full h-12 mb-6 rounded-[4px] z-10     ">
                  <label
                     htmlFor=""
                     className="text-[14px] font-semibold text-gray-600"
                  >
                     Email or Phone number
                  </label>
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
                     className=" relative w-full mt-1 py-1 px-2 rounded-[4px] outline outline-1 outline-slate-900 focus-within:outline-2 focus-within:outline-[#0A66C2] "
                  />
               </div>
               <div className="relative w-full h-12 mb-2 rounded-[4px] z-10  ">
                  <label
                     htmlFor=""
                     className="text-[14px] font-semibold text-gray-600"
                  >
                     Password (6+ characters)
                  </label>
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
                     className=" relative w-full my-1 py-1 px-2 rounded-[4px] outline outline-1 outline-slate-900 focus-within:outline-2 focus-within:outline-[#0A66C2]"
                  />
                  <button
                     onClick={(e) => {
                        e.preventDefault();
                     }}
                     className="absolute right-2 mt-[10px] px-2 text-[#0A66C2] font-semibold z-10 text-[14px] cursor-pointer rounded-full hover:bg-[#D0E8FF] focus:bg-[#D0E8FF] focus:outline focus:outline-2 focus:outline-[0A66C2]"
                  >
                     show
                  </button>
               </div>
               <div
                  htmlFor=""
                  className=" text-[12px] text-gray-600 text-center mt-5"
               >
                  By clicking Agree & Join, you agree to the LinkedIn
                  <a href="#" className="text-[#0A66C2] ml-1 font-semibold">
                     User Agreement,
                  </a>
                  <a href="#" className="text-[#0A66C2] mx-1 font-semibold">
                     Privacy Policy
                  </a>
                  and
                  <a href="#" className="text-[#0A66C2] ml-1 font-semibold">
                     Cookie Policy.
                  </a>
               </div>
               {/* <div> */}
               <button
                  onClick={register}
                  className="text-[16px] w-full my-4 py-3 text-white rounded-full bg-[#0A66C2]  hover:bg-[#004182]"
               >
                  Agree & Join
               </button>
               {/* </div> */}
               <div className="relative my-4 mb-7">
                  <hr className="border-[1px] border-gray-300  " />
                  <span className="absolute text-gray-400 w-14 -top-[14px] right-[43%] bg-white  text-center">
                     or
                  </span>
               </div>
               <div className="relative  text-gray-500 text-[16px] font-semibold">
                  <button
                     onClick={googleSignIn}
                     className="z-10 w-full py-1  rounded-full outline outline-1 outline-gray-400 hover:bg-slate-100 hover:ring-2 hover:ring-[#616161] hover:-outline-offset-[.5px]  hover:outline-[#616161] transition-all duration-300"
                  >
                     <FcGoogle className="inline text-[18px] mb-1 mr-1" /> Sign
                     in with Google
                  </button>
               </div>
               <div className="w-full mt-7 text-center">
                  Already on LinkedIn?{" "}
                  <button
                     onClick={() => {
                        navigate("/login");
                     }}
                     className="text-[#0A66C2] font-semibold"
                  >
                     Sign in
                  </button>
               </div>
            </section>
            <div className="w-[90%] mx-auto mt-4 text-center ">
               Looking to create a page for a business?{" "}
               <a href="#" className="text-[#0A66C2] font-semibold">
                  Get help
               </a>
            </div>
         </main>
         <footer className="w-full bottom-0 absolute bg-white leading-10 pb-5">
            {/* small device  footer */}
            <ul className=" flex md:hidden justify-center text-center text-[12px] text-gray-600 [&>*]:px-3 [&>*]:border-l-2 leading-5">
               <li className="border-none">Português</li>
               <li>Español </li>
               <li>Français</li>
               <li>简体中文</li>
               <li>More</li>
            </ul>
            {/* big screen footer */}
            <ul className="hidden md:flex justify-center text-[12px] text-gray-600 [&>li]:px-3 [&>li]:hover:cursor-pointer [&>li:hover]:underline">
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

export default RegisterComponent;

// react
import { useContext } from "react";
import {} from "react";

// icons
import { BiSearchAlt2 } from "react-icons/bi";
import { BsFillChatDotsFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import { HiUsers, HiBriefcase } from "react-icons/hi";
// context
import AuthContext from "../../context/AuthProvider";
// firebase
import { auth } from "../../../firebaseconfig";

const Header = () => {
   const contextValue = useContext(AuthContext);
   const user = contextValue?.user;
   const setUser = contextValue?.setUser;

   const signout = () => {
      if (auth && setUser) {
         setUser(null);
         auth.signOut();
      }
   };
   return (
      <section className="fixed flex top-0 w-[100%] h-[50px]  bg-[#FFFFFF]">
         <div className="w-[75%] h-full m-auto flex justify-between">
            <ul className="flex my-auto">
               <img
                  src={"./favicon.ico"}
                  alt="linked-in logo"
                  className="w-[35px] h-[35px]"
               />
               <li className="flex w-[20em] h-[35px] bg-[#EDF3F8] ml-2 rounded-sm">
                  <BiSearchAlt2 className="text-[22px] my-auto ml-4" />
                  <input
                     type="text"
                     className=" w-full !h-full p-1 px-3 my-auto bg-transparent outline-none"
                  />
               </li>
            </ul>
            <ul className="flex [&>li] [&>li]:w-20 [&>li]:cursor-pointer [&>li]:h-full [&>li]:flex [&>li]:flex-wrap [&>li]:justify-center text-center">
               <li className=" text-[#666666] hover:text-[#23272E] pt-1 border-b-[2px] border-[#23272E]">
                  <AiFillHome size={25} />
                  <span className="inline text-xs w-full -mt-1">Home</span>
               </li>
               <li className=" text-[#666666] hover:text-[#23272E] pt-1 border-b-[2px] border-transparent">
                  <HiUsers size={25} />
                  <span className="inline text-xs w-full -mt-1">
                     My Network
                  </span>
               </li>
               <li className=" text-[#666666] hover:text-[#23272E] pt-1 border-b-[2px] border-transparent">
                  <HiBriefcase size={25} />
                  <span className="inline text-xs w-full -mt-1">Jobs</span>
               </li>
               <li className=" text-[#666666] hover:text-[#23272E] pt-1 border-b-[2px] border-transparent">
                  <BsFillChatDotsFill size={22} />
                  <span className="inline text-xs w-full -mt-1">Messages</span>
               </li>
               <li className=" text-[#666666] hover:text-[#23272E] pt-1 border-b-[2px] border-transparent">
                  <IoIosNotifications size={25} />
                  <span className="inline text-xs w-full -mt-1">
                     Notification
                  </span>
               </li>
               <li className=" text-[#666666] hover:text-[#23272E] pt-1 border-b-[2px] border-transparent">
                  {user?.photoURL && (
                     <>
                        <img
                           src={user.photoURL}
                           alt="linked-in logo"
                           className="w-[35px] h-[35px] rounded-full"
                        />
                        <label htmlFor="" onClick={signout}>
                           signout
                        </label>
                     </>
                  )}
               </li>
            </ul>
         </div>
      </section>
   );
};

export default Header;

import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Config/AuthProvider";



const NavLinks = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#813f20]" : ""
          }
        >
          Home
        </NavLink>
      </li>


      {/* {user && (
        
      )} */}
      <>
          <li key="about">
            <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#813f20]" : ""
              }
            >
             About
            </NavLink>
          </li>
          <li>
        <NavLink
          to="/findmaids"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#813f20]" : ""
          }
        >
          Find Maids
        </NavLink>
      </li>



        </>
      <li>
        <NavLink
          to="contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#813f20]" : ""
          }
        >
       Contact
        </NavLink>
      </li>

      <li className="md:hidden ">
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#813f20]" : ""
          }
        >
          Login
        </NavLink>
        <NavLink
          to="/registration"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#813f20]" : ""
          }
        >
         Registration
        </NavLink>
      </li>
    </>
  );
};

export default NavLinks;

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
            isPending ? "pending" : isActive ? "text-[#E67700]" : ""
          }
        >
          Home
        </NavLink>
      </li>


      {user && (
        <>
          <li key="about">
            <NavLink
              to="/blog"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#E67700]" : ""
              }
            >
             Blog
            </NavLink>
          </li>
          <li>
        <NavLink
          to="/add"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#E67700]" : ""
          }
        >
          Add Product
        </NavLink>
      </li>
        </>
      )}

      <li>
        <NavLink
          to="allfoods"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#E67700]" : ""
          }
        >
        All Foods
        </NavLink>
      </li>

      <li className="md:hidden ">
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#E67700]" : ""
          }
        >
          Login
        </NavLink>
      </li>
    </>
  );
};

export default NavLinks;

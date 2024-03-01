import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Config/AuthProvider";



const NavLinks = () => {

  const { user } = useContext(AuthContext);
  const { email, displayName } = user || {};
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);




  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await fetch('https://maid-central-server-npw1g5hho-kazi-md-khorshed-alams-projects.vercel.app/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const parcels = await response.json();
        setUsers(parcels);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        setError('Failed to fetch deliveries');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  if (loading) {
    return <span className="loading loading-infinity loading-lg"></span>
  }

  if (error) {
    return <div>{error}</div>;
  }



  const myProfile = users.find(product => product.email === email);
  // console.log(myProfile);
  const { type } = myProfile || {};

  // console.log(type);
















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
        <li key="service">
          <NavLink
            to="/service"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#813f20]" : ""
            }
          >
            Service
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
        <li>
          <NavLink
            to="/Blog"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#813f20]" : ""
            }
          >
            Blog
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

      <li>
        <NavLink
          to="/faq"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#813f20]" : ""
          }
        >
          FAQ
        </NavLink>
      </li>
















      {user && type === "admin" && (
        <li>
          <NavLink
            to="/dashboard"
            className={
              (isActive, isPending) =>
                isPending ? "pending" : isActive ? "text-[#813f20]" : ""
            }
          >
            Dashboard
          </NavLink>
        </li>
      )}










      <li className="md:hidden ">
        {
          !user ?
            <> <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#813f20]" : ""
              }
            >
              Login
            </NavLink>
              <NavLink
                to="/register"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-[#813f20]" : ""
                }
              >
                Registration
              </NavLink></>
            :
            <></>
        }




      </li>
    </>
  );
};

export default NavLinks;

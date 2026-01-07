import React, { use } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../Contexts/AuthProvider';
import { toast } from 'react-toastify';

const Navbar = () => {
  const {user, logOut} = use(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () =>{
    logOut();
    navigate('/');
    toast.success("Sign out Successful")
  }
    const navlinks = (
      <>
        <div className="flex items-center justify-center">
          <NavLink
            to="/about"
            className="mr-5 hover:text-primary font-semibold text-secondary"
          >
            About Us
          </NavLink>
          <NavLink
            to="/services"
            className="mr-5 hover:text-primary font-semibold text-secondary"
          >
            Services
          </NavLink>
          <NavLink
            to="/connections"
            className="mr-5 hover:text-primary font-semibold text-secondary"
          >
            Connections
          </NavLink>
          <div className="flex justify-center items-center gap-5">
            <Link to='/myProfile'>
              <img
                className="w-15 rounded-full"
                src={`${user ? user.photoURL : ""}`}
                alt=""
              />
            </Link>
            {user ? (
              <p
                onClick={handleLogOut}
                className="mr-5 hover:text-primary font-semibold text-secondary cursor-pointer"
              >
                Sign out
              </p>
            ) : (
              <div>
                <NavLink
                  to="/auth/login"
                  className="mr-5 hover:text-primary font-semibold text-secondary"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/auth/register"
                  className="mr-5 hover:text-primary font-semibold text-secondary"
                >
                  Registration
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </>
    );
    return (
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-44 p-4 shadow leading-7"
            >
              {navlinks}
            </ul>
          </div>
          <Link to={"/"} className="text-2xl cursor-pointer font-semibold">
            Gamehub
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlinks}</ul>
        </div>
      </div>
    );
};

export default Navbar;
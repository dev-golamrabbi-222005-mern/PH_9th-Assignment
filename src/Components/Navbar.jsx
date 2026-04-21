import React, { use } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut();
    navigate("/");
    toast.success("Sign out Successful");
  };

  const linkStyles = ({ isActive }) =>
    `font-semibold transition-colors duration-200 ${
      isActive
        ? "text-[#64FFDA] border-b-2 border-[#64FFDA]"
        : "text-secondary hover:text-primary"
    }`;

  const desktopLinks = (
    <>
      <NavLink to="/" className={linkStyles}>
        Home
      </NavLink>
      <NavLink to="/allGames" className={linkStyles}>
        All Games
      </NavLink>
      <NavLink to="/about" className={linkStyles}>
        About Us
      </NavLink>
      <NavLink to="/services" className={linkStyles}>
        Services
      </NavLink>
      <NavLink to="/connections" className={linkStyles}>
        Connect
      </NavLink>
    </>
  );

  const mobileLinks = (
    <div className="flex flex-col gap-4 p-2">
      <NavLink to="/" className={linkStyles}>
        Home
      </NavLink>
      <NavLink to="/allGames" className={linkStyles}>
        All Games
      </NavLink>
      <NavLink to="/about" className={linkStyles}>
        About Us
      </NavLink>
      <NavLink to="/services" className={linkStyles}>
        Services
      </NavLink>
      <NavLink to="/connections" className={linkStyles}>
        Connect
      </NavLink>
    </div>
  );

  return (
    <div className="sticky top-0 z-50 bg-base-100/80 backdrop-blur-md shadow-sm w-full">
      <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden p-0 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-xl bg-base-100 rounded-2xl w-64 border border-gray-100"
            >
              {mobileLinks}
              <div className="divider my-2"></div>
              {user ? (
                <button
                  onClick={handleLogOut}
                  className="btn hover:text-[#64FFDA] outline-1 outline-[#64FFDA] hover:bg-secondary font-bold text-sm"
                >
                  Sign Out
                </button>
              ) : (
                <div className="flex flex-col gap-2">
                  <Link
                    to="/auth/login"
                    className="btn btn-ghost btn-sm outline-1 outline-[#64FFDA] hover:bg-secondary"
                  >
                    Login
                  </Link>
                  <Link
                    to="/auth/register"
                    className="btn bg-[#64FFDA] hover:bg-secondary text-black"
                  >
                    Register
                  </Link>
                </div>
              )}
            </ul>
          </div>
          <Link
            to="/"
            className="text-xl md:text-2xl font-bold tracking-tight text-white"
          >
            GAMEHUB
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <div className="flex items-center gap-8">{desktopLinks}</div>
        </div>

        {/* Navbar End: Optimized for Mobile/Tablet Visibility */}
        <div className="navbar-end gap-2 sm:gap-4">
          {user ? (
            <div className="flex items-center gap-3">
              <button
                onClick={handleLogOut}
                className="hidden sm:block btn btn-sm hover:text-[#64FFDA] outline-1 outline-[#64FFDA] hover:bg-secondary font-bold text-xs md:text-sm cursor-pointer transition"
              >
                LOGOUT
              </button>
              <Link to="/myProfile" className="avatar online">
                <div className="w-8 md:w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src={
                      user?.photoURL || "https://ui-avatars.com/api/?name=User"
                    }
                    alt="Profile"
                  />
                </div>
              </Link>
            </div>
          ) : (
            <div className="flex gap-2 items-center items-center">
              {/* Login: Visible on all screens */}
              <Link
                to="/auth/login"
                className="btn btn-ghost outline-1 outline-[#64FFDA] hover:bg-secondary text-xs md:text-sm px-2 md:px-4"
              >
                Login
              </Link>
              {/* Join: Hidden on mobile (under sm), visible on Tablet/Desktop */}
              <Link
                to="/auth/register"
                className="hidden sm:flex btn bg-[#64FFDA] hover:bg-secondary text-black text-xs md:text-sm px-2 md:px-4 py-5.5"
              >
                Join
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

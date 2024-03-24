import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "/", title: "Start a Search" },
    { path: "/my-job", title: "My Jobs" },
    { path: "/post-job", title: "Post a Job" },
    { path: "/browsejobs", title: "Browse Jobs" },
    { path: "/cvbuilder", title: "Build Your CV" },
  ];

  return (
    <header className="w-full mx-auto xl:px-24 px-6 sticky top-0 bg-white shadow-md z-50">
      <nav className="flex justify-between items-center py-4">
        <a href="/" className="flex items-center gap-2 text-2xl text-black font-semibold">
          <svg xmlns="http://www.w3.org/2000/svg" width="29" height="30" viewBox="0 0 29 30" fill="none">
            <circle cx="12.0143" cy="12.5143" r="12.0143" fill="#3575E2" fillOpacity="0.4" />
            <circle cx="16.9857" cy="17.4857" r="12.0143" fill="#3575E2" />
          </svg>
          <span>WE HIRE</span>
        </a>

        <ul className="hidden md:flex gap-8 text-primary">
          {navItems.map(({ path, title }) => (
            <li key={path}>
              <NavLink to={path} activeClassName="text-sky-500">
                {title}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-8">
          <div className="hidden lg:block">
            <NavLink to="/login" className="py-2 px-5 border rounded text-primary hover:bg-primary hover:text-white transition duration-300">
              Log In
            </NavLink>
            <NavLink to="/sign-up" className="py-2 px-8 border rounded bg-sky-500 text-white hover:bg-opacity-80 transition duration-300">
              Sign Up
            </NavLink>
          </div>

          <div className="md:hidden">
            <button onClick={handleMenuToggler} className="focus:outline-none">
              {isMenuOpen ? <FaXmark className="w-6 h-6 text-primary" /> : <FaBarsStaggered className="w-6 h-6 text-primary" />}
            </button>
          </div>
        </div>
      </nav>

      <div className={`px-4 bg-black py-5 rounded-sm ${isMenuOpen ? "" : "hidden"}`}>
        <ul>
          {navItems.map(({ path, title }) => (
            <li key={path} className="text-white py-2">
              <NavLink to={path} activeClassName="text-sky-500" onClick={handleMenuToggler}>
                {title}
              </NavLink>
            </li>
          ))}

          <li className="text-white py-2">
            <NavLink to="/login" onClick={handleMenuToggler}>Log In</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;

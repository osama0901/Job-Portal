import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import Login from "./Login";
import SignUp from "./Signup";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [SignupOpen, setSignupOpen] = useState(false);
  const [userName, setUserName] = useState(null);

  // useEffect(() => {
  //   // Check if user's name exists in local storage
  //   const storedName = localStorage.getItem('userName');
  //   if (storedName) {
  //     setUserName(storedName);
  //   }
  // }, []);

  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handlePathClick = () => {
    // Close the menu only if it's open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const handleLoginModal = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  const handleSignupModal = () => {
    setSignupOpen(!SignupOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userToken');
    setUserName(null);
  };

  const navItems = [
    { path: "/", title: "Start a Search" },
    { path: "/my-job", title: "My Jobs" },
    { path: "/post-job", title: "Post a Job" },
    { path: "/browsejobs", title: "Browse Jobs" },
    // { path: "/cvbuilder", title: "Build Your CV" },
  ];

  return (
    <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <nav className="flex justify-between item-center py-6">
        <Link to="/" className="flex items-center gap-2 text-2xl text-black">
          <svg xmlns="http://www.w3.org/2000/svg" width="29" height="30" viewBox="0 0 29 30" fill="none">
            <circle cx="12.0143" cy="12.5143" r="12.0143" fill="#3575E2" fillOpacity="0.4" />
            <circle cx="16.9857" cy="17.4857" r="12.0143" fill="#3575E2" />
          </svg>
          <span>WE HIRE</span>
        </Link>

        {/* Nav items for large devices */}
        <ul className="hidden md:flex gap-12">
          {navItems.map(({ path, title }) => (
            <li key={path} className="text-base text-primary">
              <NavLink to={path} className={({ isActive }) => (isActive ? "active" : "")}>
                {title}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Conditional rendering based on user's name */}

        <div className="text-base text-primary font-medium space-x-5 hidden lg:block">
          {userName ? (
            <button className="py-2 px-5 border rounded">{userName}</button>
          ) : (
            <button onClick={handleLoginModal} className="py-2 px-5 border rounded">Log In</button>
          )}
          {userName ? (
            <button onClick={handleLogout} className="py-2 px-5 border rounded bg-sky-500 text-white">Logout</button>
          ) : (
            <button onClick={handleSignupModal} className="py-2 px-5 border rounded bg-sky-500 text-white">Sign Up</button>
          )}
        </div>

        {/* Mobile menu */}
        <div className="md:hidden block">
          <button onClick={handleMenuToggler}>
            {isMenuOpen ? <FaXmark className="w-5 h-5 text-primary" /> : <FaBarsStaggered className="w-5 h-5 text-primary" />}
          </button>
        </div>
      </nav>

      {/* Nav items for mobile */}
      <div className={`px-4 bg-white py-5 rounded-sm ${isMenuOpen ? "" : "hidden"}`}>
        <ul>
          {navItems.map(({ path, title }) => (
            <li key={path} className="text-base text-black first:texti-white py-1">
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={handlePathClick} // Close the menu only if it's open
              >
                {title}
              </NavLink>
            </li>
          ))}
          {/* {!userName && <li className="text-white py-1"><button onClick={handleLoginModal}>Log In</button></li>} */}
          {userName ? (
            <button className="py-2 px-5 border rounded">{userName}</button>
          ) : (
            <button onClick={handleLoginModal} className="py-2 px-5 border rounded">Log In</button>
          )}
          {userName ? (
            <button onClick={handleLogout} className="py-2 px-5 border rounded bg-sky-500 text-white">Logout</button>
          ) : (

            ""
          )}
        </ul>
      </div>

      {/* Login Modal */}
      {isLoginOpen && <Login setLoginOpen={setIsLoginOpen} setsignupOpen={setSignupOpen} setUserName={setUserName} />}
      {SignupOpen && <SignUp setsignupOpen={setSignupOpen} setLoginOpen={setIsLoginOpen} setUserName={setUserName} />}
    </header>
  );
};

export default Navbar;

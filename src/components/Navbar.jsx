import React from "react";
import toast from "react-hot-toast";
import { FaCode } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      setIsLoggedIn(false);
      toast.success("Logout successful");
      navigate("/");
    }
  };

  // Button styles for consistency
  const buttonStyle = "bg-richblack-800 py-[4px] px-[12px] rounded-[8px] border border-richblack-700";

  return (
    <nav className="flex items-center justify-between py-4 w-11/12 max-w-[1200px] mx-auto text-white">
      {/* Logo */}
      <div className="flex items-center gap-1 text-2xl select-none">
        <FaCode />
        <Link to="/" className="font-semibold">
          Code<span className="text-blue-400">Crew</span>
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-x-6 text-richblack-100">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      {/* Auth Buttons */}
      <div className="flex items-center gap-x-4 text-richblack-100">
        {isLoggedIn ? (
          <>
            <Link to="/dashboard">
              <button className={buttonStyle}>Dashboard</button>
            </Link>
            <button onClick={handleLogout} className={buttonStyle}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/signup">
              <button className={buttonStyle}>Signup</button>
            </Link>
            <Link to="/login">
              <button className={buttonStyle}>Login</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

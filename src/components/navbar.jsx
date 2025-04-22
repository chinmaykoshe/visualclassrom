import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the mobile menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img src="logo.PNG" alt="Logo" className="w-14 h-14" />
        </NavLink>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-lg font-medium">
          {[ 
            { path: "/", label: "Home" },
            { path: "/courses", label: "Courses" },
            { path: "/about-us", label: "About Us" },
            { path: "/contact-us", label: "Contact Us" },
            { path: "/sitemap", label: "Sitemap" },
            { path: "/privacy-policy", label: "Privacy Policy" },
            { path: "/profile", label: "Profile" },
          ].map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                onClick={closeMenu}  // Close the menu when a link is clicked
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md transition duration-300 ${
                    isActive
                      ? "bg-yellow-500 text-gray-900 font-bold"
                      : "hover:bg-gray-700"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <div
        className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-gray-900 text-white py-4`}
      >
        <ul className="space-y-4 text-center text-lg font-medium">
          {[ 
            { path: "/", label: "Home" },
            { path: "/courses", label: "Courses" },
            { path: "/about-us", label: "About Us" },
            { path: "/contact-us", label: "Contact Us" },
            { path: "/sitemap", label: "Sitemap" },
            { path: "/privacy-policy", label: "Privacy Policy" },
            { path: "/profile", label: "Profile" },
          ].map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                onClick={closeMenu}  // Close the menu when a link is clicked
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md transition duration-300 ${
                    isActive
                      ? "bg-yellow-500 text-gray-900 font-bold"
                      : "hover:bg-gray-700"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

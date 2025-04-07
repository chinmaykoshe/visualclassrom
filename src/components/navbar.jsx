import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img src="logo.PNG" alt="Logo" className="w-14 h-14" />
        </NavLink>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-lg font-medium">
          {[
            { path: "/", label: "Home" },
            { path: "/courses", label: "Courses" },
            { path: "/about-us", label: "About Us" },
            { path: "/contact-us", label: "Contact Us" },
            { path: "/sitemap", label: "Sitemap" },
            { path: "/privacy-policy", label: "Privacy Policy" },
            { path: "/register", label: "Register" },
            { path: "/profile", label: "Profile" },
          ].map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
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

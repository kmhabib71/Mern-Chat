import React from "react";

import { HashLink as Link } from "react-router-hash-link";
const NavMenu = ({ navLinks }) => {
  return (
    <nav className="ml-4">
      <ul className="flex space-x-4">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link
              to={link.path}
              className="text-gray-300 hover:text-white transition-colors duration-300">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;

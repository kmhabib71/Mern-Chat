import React, { useState } from "react";

const AccountDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="px-4 mx-2 py-2 text-sm rounded text-gray-700 bg-gray-100 hover:bg-gray-200">
        Accounts
      </button>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu">
            <a
              href="/profile"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem">
              Your Profile
            </a>
            <a
              href="/settings"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem">
              Settings
            </a>
            <a
              href="/sign-out"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem">
              Sign out
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountDropdown;

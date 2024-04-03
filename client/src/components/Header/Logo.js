import React from "react";

// Logo.jsx

const Logo = ({ logoSrc, appName }) => {
  return (
    <div className="flex items-center">
      {logoSrc ? (
        <img src={logoSrc} alt="Logo" className="h-8 mr-2" />
      ) : (
        <span className="text-xl font-bold">{appName}</span>
      )}
    </div>
  );
};

export default Logo;

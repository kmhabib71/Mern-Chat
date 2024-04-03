import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4 shadow py-4 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-white">
          Task Management &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

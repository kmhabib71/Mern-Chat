// Home.js
import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="header bg-gray-800 text-white py-4 pt-16 h-screen">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-4">
            Welcome to Real-time Chat App
          </h1>
          <p className="text-lg mb-4">Start chatting now!</p>
          <Link to="/chat">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Start Chat
            </button>
          </Link>
        </div>
      </div>
      <footer className="footer bg-gray-800 text-white py-4">
        <div className="container mx-auto">
          <p>&copy; 2022 My Chat App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;

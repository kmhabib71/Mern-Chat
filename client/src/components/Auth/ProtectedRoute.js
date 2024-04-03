import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        console.log("Checking auth status...");
        const response = await axios.get(
          "http://localhost:5000/api/auth/status",
          {
            withCredentials: true, // Include credentials
          }
        );
        console.log("Response: ", response.data);

        setIsAuthenticated(true);
        setIsAuthorized(response.data.user);
        setIsLoading(false);
        // } else {
        //   console.log("User not authenticated");
        // }
      } catch (error) {
        console.log("Error checking auth status: ", error);
        if (error.response) {
          console.log("Server responded with status: ", error.response.status);
          console.log("Response data: ", error.response.data);
        }
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }
  console.log("isAuthenticated: ", isAuthenticated);
  if (!isAuthenticated) {
    return <Navigate to="/signin" state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;

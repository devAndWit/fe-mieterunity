import { useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../AuthContext.jsx";
import axios from "axios";

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const backendUrl = "http://localhost:8000";

  // FUNCTION SIGNUP
  const signup = async (formState) => {
    try {
      const response = await axios.post(
        `${backendUrl}/users/signup`,
        formState,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.status === 201) {
        setError(response.data.message); // Zeigt die Nachricht vom Backend an.
        
        return;
      }

      // Erfolgreiche Anmeldung
      setUser(response.data.user);

      setIsAuthenticated(true);

      localStorage.setItem("token", response.data.token);

      navigate("/login");
    } catch (error) {
      

      const errorMessage = error.response.data.message;

      switch (error.response.status) {
        case 401:
          console.log(errorMessage);
          break;

        case 404:
          console.log(errorMessage);
          break;

        case 409:
          console.log(errorMessage);
          break;

        case 500:
          console.log(errorMessage);
          break;

        default:
          console.log(errorMessage);
          break;
      }

      return errorMessage;
    }
  };

  const login = async (formState) => {
    let success = false;

    try {
      const { data } = await axios.post(
        `${backendUrl}/users/login`,
        formState,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setUser(data.user);
      setIsAuthenticated(true);
      localStorage.setItem("token", data.token);

      navigate("/profile");

      success = true;
    } catch (error) {
      console.log("Error - Login: ", error);
    }

    return success;
  };

  const logout = async () => {
    try {
      localStorage.removeItem("token");
      await axios.post(
        `${backendUrl}/users/logout`,
        {},
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setUser(null);
      setIsAuthenticated(false);
      
      navigate("/");
    } catch (error) {
      console.log("Error - Logout", error);
    }
  };

  const value = {
    signup,
    user,
    isAuthenticated,
    login,
    logout,
    backendUrl,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;

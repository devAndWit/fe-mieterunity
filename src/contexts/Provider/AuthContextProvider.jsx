import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../AuthContext.jsx";

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(null);
  const [backendUrl, setBackendUrl] = useState("http://localhost:8000");

  const navigate = useNavigate();

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
          console.error(errorMessage);
          break;

        case 404:
          console.error(errorMessage);
          break;

        case 409:
          console.error(errorMessage);
          break;

        case 500:
          console.error(errorMessage);
          break;

        default:
          console.error(errorMessage);
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
      console.error("Error - Login: ", error);
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
    error,
    user,
    isAuthenticated,
    login,
    logout,
    backendUrl,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;

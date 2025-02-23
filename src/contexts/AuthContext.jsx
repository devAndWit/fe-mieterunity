import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Erstelle den AuthContext
const AuthContext = createContext();

// Provider-Komponente für den AuthContext
const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate();

  const signup = async (formState) => {
    try {
      const { data } = await axios.post(
        `http://localhost:8901/users/signup`,
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
      console.log("signup: success");
      navigate("/books");
    } catch (error) {
      console.log("Error - Signup: ", error);
    }
  };

  const login = async (formState) => {
    let success = false;
    try {
      const { data } = await axios.post(
        `http://localhost:8901/users/login`,
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
      console.log("Login: Success");
      navigate("/books");

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
        "http://localhost:8901/users/logout",
        {},
        {
          withCredentials: true,
        }
      );
      setUser(null);
      setIsAuthenticated(false);
      console.log("Logout : success");
      navigate("/");
    } catch (error) {
      console.log("Error - Logout", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ signup, user, isAuthenticated, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Exportiere nur den AuthContext und den Provider
export { AuthContext, AuthContextProvider };

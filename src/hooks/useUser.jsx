import { useState, useEffect, useContext } from "react";
import axios from "axios";
import AuthContext from "../contexts/AuthContext.jsx";

export const useUser = (userId) => {
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);
  const [userError, setUserError] = useState(null);

  const { backendUrl } = useContext(AuthContext);

  useEffect(() => {
    const fetchUser = async () => {
      console.log("FETCHE USER DATEN");

      setUserLoading(true);
      setUserError(null);

      try {
        const response = await axios.get(`${backendUrl}/users/${userId}`, {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log(response.data);
        setUser(response.data);
      } catch (err) {
        setUserError(err);
      } finally {
        setUserLoading(false);
      }
    };

    if (userId) {
      fetchUser();
    }
  }, [userId, backendUrl]);

  return { user, userLoading, userError };
};

export default { useUser };

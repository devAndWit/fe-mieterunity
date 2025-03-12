import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";

import { BACKEND_URL } from "../../../../../const/urls.js";
import { ForumContext } from "../../../../../contexts/ForumContext.jsx";

import { tasks } from "../../../../../const/tasks.js";
import styles from "./Tile.module.css";

export const DirectMessage = () => {
  const { users, userId, setUsers, currentLocation, setCurrentTask, setDirectMessageToUser} =
    useContext(ForumContext);

  const {
    data: dataResponse,
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: [currentLocation],
    queryFn: async () => {
      if (!currentLocation) {
        return null;
      }
      const response = await fetch(
        `${BACKEND_URL}/users/getUsersByLocationId/${currentLocation}`
      );
      const result = await response.json();

      if (result.data) {
        setUsers(result.data);
      }
      return result;
    },
  });

  const handleClick = (userTo) => {
    console.log("SELECTED USER : ", userTo);
    setDirectMessageToUser(userTo);
    setCurrentTask(tasks.Message);
  };

  /*------------------------------------------------*/
  // Output
  /*------------------------------------------------*/

  if (loading) {
    return (
      <>
        <div className={styles.Tile}>Daten werden geladen...</div>;
      </>
    );
  }

  if (error) {
    return (
      <>
        <div className={styles.Tile}>
          Fehler beim Laden der Benutzerliste: {error.message}
        </div>
        ;
      </>
    );
  }

  if (users && Array.isArray(users) && users.length > 0) {
    return (
      <>
        <div className={styles.Tile}>
          <h2>Nachrichten:</h2>
          <ul>
            {Array.isArray(users) &&
              users.map((user, index) => {
                if (user._id === userId) {
                  return
                }
                return (
                  <li
                    key={index}
                    onClick={() => {
                      handleClick(user);
                    }}
                  >
                    {user.email}
                  </li>
                );
              })}
          </ul>
        </div>
      </>
    );
  }

  return (
    <>
      <div className={styles.Tile}>
        <h2>Nachrichten:</h2>
        <div>Keine anderen Nachbarn verfügbar.</div>
      </div>
    </>
  );
};

export default DirectMessage;

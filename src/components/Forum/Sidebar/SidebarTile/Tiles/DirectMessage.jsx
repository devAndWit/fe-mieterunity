import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";

import { BACKEND_URL } from "../../../../../const/urls.js";
import { ForumContext } from "../../../../../contexts/ForumContext.jsx";

import styles from "./Tile.module.css";

export const DirectMessage = () => {
  const { users, setUsers, currentLocation, setCurrentTask } =
    useContext(ForumContext);

  const {
    data: dataResponse,
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: [currentLocation],
    queryFn: async () => {
      const response = await fetch(
        `${BACKEND_URL}/users/getUsersByLocationId/${currentLocation}`
      );
      const result = await response.json();

      if (result.data) {
        console.log("TYPEOF", typeof result.data);
        setUsers(result.data);
      }
      return result;
    },
  });

  console.log("dataResponse", dataResponse);

  const handleClick = (userTo) => {
    console.log("SELECTED USER : ", userTo);
    setCurrentTask("Message");
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

  console.log(users);

  if (users && Array.isArray(users) && users.length > 0) {
    return (
      <>
        <div className={styles.Tile}>
          <h2>Nachrichten:</h2>
          <ul>
            {Array.isArray(users) &&
              users.map((user, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => {
                      handleClick(user._id);
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

import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";

import { BACKEND_URL } from "../../../../../const/urls.js";
import { ForumContext } from "../../../../../contexts/ForumContext.jsx";


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

  console.log("dataResponse", dataResponse)

  const handleClick = () => {
    console.log("SELECT USER : ", users._id);
    setCurrentTask("Message");
  };

  const handleNewUser = () => {};

  /*------------------------------------------------*/
  // Output
  /*------------------------------------------------*/

  if (loading) {
    return (
      <>
        <div>Daten werden geladen...</div>;
      </>
    );
  }

  if (error) {
    return (
      <>
        <div>Fehler beim Laden der UserListe: {error.message}</div>;
      </>
    );
  }

  console.log(users);

  if (users && Array.isArray(users) && users.length > 0) {
    return (
      <>
        <div>
          <h2>Nachrichten:</h2>

          {console.log(Array.isArray(users))}
          <ul>
            {Array.isArray(users) &&
              users.map((user, index) => {
                console.log(user);
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
      <h2>Nachrichten:</h2>
      <div>Keine anderen Nachbarn verfügbar.</div>
    </>
  );
};

export default DirectMessage;

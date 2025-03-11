import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { tasks } from "../../../../../const/tasks.js";
import { BACKEND_URL } from "../../../../../const/urls.js";
import { ForumContext } from "../../../../../contexts/ForumContext.jsx";

import styles from "./Tile.module.css";

function Thread() {
  const {
    currentLocation,
    setThreads,
    threads,
    setCurrentTask,
    setCurrentThread,
  } = useContext(ForumContext);

  const {
    data: dataResponse,
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: ["thread", currentLocation],
    // enabled: !!currentLocation,
    queryFn: async () => {
      const response = await fetch(
        `${BACKEND_URL}/threads/findThreadsByAddressId/${currentLocation}`
      );
      const result = await response.json();

      if (result.data) {
        setThreads(result.data);
      }
      return result;
    },
  });

  const handleClickThread = (thread) => {
    console.log("HANDLE CLICK THREAD : ", thread.length);
    setCurrentTask(tasks.Thread);
    setCurrentThread(thread);
  };

  const handleNewThread = (thread) => {
    console.log("HANDLE CLICK NEW THREAD : ");
    setCurrentThread(thread._id);
    setCurrentTask(tasks.NewThread);
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
          Fehler beim Laden der ThreadListe: {error.message}
        </div>
        ;
      </>
    );
  }

  if (threads && Array.isArray(threads) && threads.length > 0) {
    return (
      <>
        <div className={styles.Tile}>
          <h2>Themen:</h2>
          <ul>
            {Array.isArray(threads) &&
              threads.map((thread, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => {
                      handleClickThread(thread._id);
                    }}
                  >
                    {thread.title}
                  </li>
                );
              })}
          </ul>
          <>
            <div className={styles.ThreadControl}>
              <button
                onClick={() => {
                  handleNewThread();
                }}
              >
                +
              </button>
            </div>
          </>
        </div>
      </>
    );
  }

  return (
    <>
      <div className={styles.Tile}>
        <h2>Themen:</h2>
        <div>Keine Foren verfügbar.</div>
        {currentLocation ? controlButton() : ""}
      </div>
    </>
  );
}

export default Thread;

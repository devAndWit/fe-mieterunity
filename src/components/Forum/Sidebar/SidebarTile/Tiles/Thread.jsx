import { useEffect, useState, useContext } from "react";
import { useQuery } from "@tanstack/react-query";

import { AuthContext } from "../../../../../contexts/AuthContext.jsx";
import { ForumContext } from "../../../../../contexts/ForumContext.jsx";
import { BACKEND_URL } from "../../../../../const/urls.js";

import styles from "./Tiles.module.css";

function Thread() {
  const { currentLocation, setThreads, threads, setCurrentTask } =
    useContext(ForumContext);

  const {
    data: dataResponse,
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: [currentLocation],
    queryFn: async () => {
      const response = await fetch(
        `${BACKEND_URL}/threads/findThreadsByAddressId/${currentLocation}`
      );
      const result = await response.json();

      if (result.data) {
        console.log("TYPEOF", typeof result.data);
        setThreads(result.data);
      }
      return result;
    },
  });

  const handleClick = (threads) => {
    console.log("SELECTED THREAD :", threads._id);
    setCurrentTask("Thread");
  };

  const handleNewThread = () => {};

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
        <div>Fehler beim Laden der ThreadListe: {error.message}</div>;
      </>
    );
  }

  console.log(threads);

  if (threads && Array.isArray(threads) && threads.length > 0) {
    return (
      <>
        <div>
          <h2>Themen:</h2>
          {console.log(Array.isArray(threads))}
          <ul>
            {Array.isArray(threads) &&
              threads.map((thread, index) => {
                console.log(thread);
                return (
                  <li
                    key={index}
                    onClick={() => {
                      handleClick(thread);
                    }}
                  >
                    {thread.title}
                  </li>
                );
              })}
          </ul>
          <button
            onClick={() => {
              handleNewThread();
            }}
          >
            Neu erstellen
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <h2>Themen:</h2>
      <div>Keine Foren verfügbar.</div>
      <div>
        <button
          onClick={() => {
            handleNewThread();
          }}
        >
          Neu erstellen
        </button>
      </div>
    </>
  );
}

export default Thread;

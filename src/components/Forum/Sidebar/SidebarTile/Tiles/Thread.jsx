import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { tasks } from '../../../../../const/tasks.js';
import { BACKEND_URL } from "../../../../../const/urls.js";
import { ForumContext } from "../../../../../contexts/ForumContext.jsx";


function Thread() {
  const { currentLocation, setThreads, threads, setCurrentTask, setCurrentThread } =
    useContext(ForumContext);
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

  const handleClick = (thread) => {
    console.log("THREAD INPUT", thread)
    setCurrentTask(tasks.Thread);
    setCurrentThread(thread._id)
  };

  const handleNewThread = () => {
    setCurrentThread(null)
    setCurrentTask(tasks.NewThread);
  };

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

  if (threads && Array.isArray(threads) && threads.length > 0) {
    return (
      <>
        <div>
          <h2>Themen:</h2>
          <ul>
            {Array.isArray(threads) &&
              threads.map((thread, index) => {
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
            Neu erstellen 1
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
          Neu erstellen 2
        </button>
      </div>
    </>
  );
}

export default Thread;

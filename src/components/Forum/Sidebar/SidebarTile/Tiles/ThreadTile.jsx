import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { AuthContext } from "../../../../../contexts/AuthContext.jsx";
import { ForumContext } from "../../../../../contexts/ForumContext.jsx";

import styles from "./Tiles.module.css";

function Thread() {
  const { backendUrl, user } = useContext(AuthContext);

  const [threadList, setThreadList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const { activeTile, setActiveTile } = useContext(ForumContext);
  const { categoryId, setCategoryId } = useContext(ForumContext);

  const handleChangeId = (e) => {
    setActiveTile(2);
    setCategoryId(e.target.dataset.id);
  };

  useEffect(() => {
    // API-Daten holen
    const loadThreads = async () => {
      try {
        const response = await axios.get(`${backendUrl}/threads`, {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response && response.data && response.status === 200) {
          setThreadList(response.data.data || null);
        } else if (response && response.status === 304) {
          // 304: Daten nicht geändert, verwende den aktuellen Zustand
          setIsLoading(false);
          return;
        } else {
          setIsError(true);
        }
      } catch (error) {
        console.error("Error fetching Thread: ", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    loadThreads();
  }, [backendUrl]);

  console.log("isLoading");
  if (isLoading) {
    return <div>Data Loading....</div>;
  }

  console.log("isError");
  if (isError) {
    return <div>Error at Thread Loading</div>;
  }
  if (!isLoading && !isError) {
    return (
      <div className={styles.Tiles}>
        <h2>Threads</h2>
        <ul>
          {threadList.map(
            (
              value,
              index // Wichtig: Rückgabe mit Klammern
            ) => (
              <li key={index} data-id={value._id} onClick={handleChangeId}>
                {value.title}
              </li>
            )
          )}
        </ul>
      </div>
    );
  }
}

export default Thread;

import { useContext, useEffect, useState } from "react";

import ThreadItem from "./Items/ThreadItem.jsx";
import SendMessage from "./SendMessage.jsx";
import ForumContext from "../../../../contexts/ForumContext.jsx";
import AuthContext from "./../../../../contexts/AuthContext.jsx";
import axios from "axios";

import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { BACKEND_URL } from "../../../../const/urls.js";

import styles from "./List.module.css";

export const ThreadList = () => {
  const { currentThread } = useContext(ForumContext);
  const { user } = useContext(AuthContext);

  const [urlGET, setUrlGET] = useState(
    `${BACKEND_URL}/messages/${currentThread}`
  );

  const [dataGET, setDataGET] = useState(null);
  const [errorGET, setErrorGET] = useState(null);
  const [loadingGET, setLoadingGET] = useState(true);
  const [paramsGET, setParamsGET] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoadingGET(true);

      try {
        const response = await axios.get(urlGET, {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.status >= 200 && response.status < 300) {
          setDataGET(response.data);
        } else {
          // Unerwarteter Statuscode
          setErrorGET({
            message: `Unerwarteter Statuscode: ${response.status}`,
            status: response.status,
          });
        }
      } catch (err) {
        if (err.response) {
          // Server hat mit einem Fehlerstatuscode geantwortet
          setErrorGET({
            message: `Serverfehler: ${err.response.status} - ${
              err.response.data.message || "Keine detaillierte Fehlermeldung"
            }`,
            status: err.response.status,
          });
        } else if (err.request) {
          // Keine Antwort vom Server erhalten
          setErrorGET({
            message: "Keine Antwort vom Server erhalten",
            status: null,
          });
        } else {
          // Fehler beim Erstellen der Anfrage
          setErrorGET({
            message: `Fehler beim Senden der Anfrage: ${err.message}`,
            status: null,
          });
        }
      } finally {
        setLoadingGET(false);
      }
    };
    fetchData();
  }, [urlGET, currentThread]);

  const msgList = dataGET;

  if (msgList) {
    console.log("MSG_LIST : ", msgList);
  }

  return (
    <>
      <div className={styles.ThreadList}>
        <div className={styles.ThreadListHeader}>
          <div className={styles.ThreadListHeaderItem}>
            <span>Test</span>
          </div>
          <div className={styles.ThreadListHeaderItem}>
            <span>
              <FaArrowRightArrowLeft />
            </span>
          </div>
          <div className={styles.ThreadListHeaderItem}>
            <span>Test</span>
          </div>
        </div>
        <div className={styles.ThreadListContent}>
          {msgList &&
            msgList.map((msg) => <ThreadItem key={msg._id} message={msg} />)}
        </div>
      </div>
      <SendMessage></SendMessage>
    </>
  );
};

export default ThreadList;

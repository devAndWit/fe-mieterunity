import AuthContext from "./../../../../contexts/AuthContext.jsx";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import ThreadItem from "./Items/ThreadItem.jsx";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import useMongoGet from "./../../../../hooks/useMongoGet.js";
import ForumContext from "../../../../contexts/ForumContext.jsx";
import { BACKEND_URL } from "../../../../const/urls.js";

import styles from "./List.module.css";

export const ThreadList = () => {
  const [url, setUrl] = useState(null);
  const { currentThread } = useContext(ForumContext);
  const { data, loading, error } = useMongoGet(url);
  const [msgList, setMsgList] = useState(null);
  const [userMsg, setUserMsg] = useState("");

  useEffect(() => {
    if (!loading && error === null) {
      setMsgList(data);
    }

    const loadThreadList = () => {
      if (!currentThread && currentThread !== null) {
        setUrl(
          `${BACKEND_URL}/messages/allMessagesFromThreadId/${currentThread}`
        );
        return;
      }
      setUrl(null);
      console.log("CURRENT_THREAD : ", currentThread);
    };

    loadThreadList();
  }, [data, loading, error, setMsgList, url, currentThread]);

  console.log("MessageList : ", msgList || "Liste ist leer");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("FormData: ", userMsg);
  };

  /*-------------------------------------------------
  
      Output

  ---------------------------------------------------*/

  if (loading) {
    return <div className={styles.ThreadList}>Data Loading...</div>;
  }

  if (!error) {
    return <div className={styles.ThreadList}>Keine Nachrichten gefunden?</div>;
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
          <ThreadItem></ThreadItem>
        </div>
      </div>
      <div className={styles.ThreadInputWrapper}>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            name="userMsg"
            value={userMsg}
            onChange={(e) => {
              setUserMsg(e.target.value);
            }}
            placeholder="Nachricht eingeben"
          />
          <button type="submit">senden</button>
        </form>
      </div>
    </>
  );
};

export default ThreadList;

import { useContext, useEffect, useState } from "react";

import ForumContext from "../../../../contexts/ForumContext.jsx";
import AuthContext from "./../../../../contexts/AuthContext.jsx";
import axios from "axios";

import { BACKEND_URL } from "../../../../const/urls.js";

import styles from "./List.module.css";

export const SendMessage = () => {
  const { currentThread } = useContext(ForumContext);
  const { user } = useContext(AuthContext);

  const [currentTask, setCurrentTask] = useState("Thread");
  const [userError, setUserError] = useState(null);
  const [urlPOST, setUrlPOST] = useState(`${BACKEND_URL}/messages/`);

  const [dataPOST, setDataPOST] = useState(null);
  const [errorPOST, setErrorPOST] = useState(null);
  const [loadingPOST, setLoadingPOST] = useState(true);
  const [paramsPOST, setParamsPOST] = useState(null);

  const [message, setMessage] = useState("");

  const handleInput = (e) => {
    console.log("---HandleInput---");
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setUserError("Sie müssen angelmeldet sein, um eine Nachricht zu senden.");
      return;
    }
    setLoadingPOST(true);
    setErrorPOST(null);

    switch (currentTask) {
      case "Thread":
        setParamsPOST({ message, fromUserId: user._id, thread: currentThread });
        break;
      case "DirectMessage":
        setParamsPOST({ message, fromUserId: user._id, thread: currentThread });
        break;
      default:
        break;
    }

    try {
      const response = await axios.post(urlPOST, paramsPOST, {
        withCredentials: true,
        headers: { ContentType: "application/json" },
      });
      if (response.status >= 200 && response.status < 300) {
        setDataPOST(response.data);
        setMessage("");
      } else {
        setErrorPOST(`Fehler beim Senden der Nachricht: ${response.status}`);
      }
    } catch (err) {
      if (err.response) {
        setErrorPOST(
          `Serverfehler: ${err.response.status} - ${
            err.response.data.message || "Keine detaillierte Fehlermeldung"
          }`
        );
      } else {
        setErrorPOST("Fehler beim Senden der Nachricht.");
      }
    } finally {
      setLoadingPOST(false);
    }
  };

  return (
    <>
      <div className={styles.ThreadInputWrapper}>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            name="message"
            value={message}
            onChange={handleInput}
            placeholder="Nachricht eingeben"
          />
          <button type="submit">{loadingPOST ? "senden..." : "senden"}</button>
        </form>
        {errorPOST && (
          <p className={styles.ErrorSend} style={{ color: "red" }}>
            {errorPOST}
          </p>
        )}
      </div>
    </>
  );
};

export default SendMessage;

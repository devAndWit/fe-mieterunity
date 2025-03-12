import axios from "axios";
import { useContext, useState } from "react";
import { BACKEND_URL } from "../../../../const/urls.js";
import AuthContext from "../../../../contexts/AuthContext.jsx";
import ForumContext from "../../../../contexts/ForumContext.jsx";
import styles from "./List.module.css";

export const SendMessage = () => {
  const { currentThread } = useContext(ForumContext);
  const { user } = useContext(AuthContext);

  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInput = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("Sie müssen angemeldet sein, um eine Nachricht zu senden.");
      return;
    }

    setIsLoading(true);
    setError(null);

    const payload = {
      message,
      fromUserId: user._id,
      thread: currentThread,
    };

    try {
      const response = await axios.post(`${BACKEND_URL}/messages/`, payload, {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      });

      if (response.status >= 200 && response.status < 300) {
        setMessage(""); // Clear the input field on success
      } else {
        setError(`Fehler beim Senden der Nachricht: ${response.status}`);
      }
    } catch (err) {
      setError(
        err.response
          ? `Serverfehler: ${err.response.status} - ${
              err.response.data.message || "Keine detaillierte Fehlermeldung"
            }`
          : "Fehler beim Senden der Nachricht."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.ThreadInputWrapper}>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="message"
          value={message}
          onChange={handleInput}
          placeholder="Nachricht eingeben"
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Senden..." : "Senden"}
        </button>
      </form>
      {error && <p className={styles.ErrorSend} style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default SendMessage;

import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { BACKEND_URL } from "./../../../../const/urls.js";
import { ForumContext } from "./../../../../contexts/ForumContext.jsx";
import { anonymizeString } from "./../../../../utils/anonymizeString.js";
import styles from "./List.module.css";

const MessageList = () => {
  const { userId, directMessageToUser } = useContext(ForumContext);
  const [newMessage, setNewMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState(null);

  // Query to fetch messages
  const { data: messagesData, isLoading, error: fetchError } = useQuery({
    queryKey: ["messages", userId, directMessageToUser._id],
    queryFn: async () => {
      const response = await fetch(
        `${BACKEND_URL}/messages/allMessagesFromAndToUserId/${userId}/${directMessageToUser._id}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch messages");
      }
      const result = await response.json();
      return result || [];
    },
  });

  // Function to send a new message
  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    setIsSending(true);
    setError(null);

    try {
      const response = await fetch(
        `${BACKEND_URL}/messages/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: newMessage,
            fromUserId: userId,
            toUserId: directMessageToUser._id,
            // reactions: [{ userRefId: userId, reactionRefId: "thumbs_up" }],
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      const newMessageData = await response.json();

      // Update the local messages state
      if (messagesData) {
        messagesData.data.push(newMessageData.data); // Append the new message to the existing array
        setNewMessage(""); // Clear the input field
      }
      return messagesData ?? []
    } catch (error) {
      console.error("Fehler beim Senden der Nachricht:", error);
      setError("Fehler beim Senden der Nachricht.");
    } finally {
      setIsSending(false);
    }

  };

  const label = anonymizeString(
    directMessageToUser.firstName || directMessageToUser.email
  );

  if (isLoading) return <div>Loading...</div>;
  // if (fetchError || error) return error && <div style={{ color: "red" }}>{error ?? fetchError.message}</div>

  console.log("messages", messagesData);

  return (
    <>
      <p>{label}</p>
      <div className={styles.DirectMsgList}>
        {messagesData && messagesData.data && messagesData.data.length > 0 ? (
          messagesData.data.map((message, index) => (
            <div key={index}>{message.message}</div>
          ))
        ) : (
          <p>Keine Nachrichten vorhanden</p>
        )}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Nachricht eingeben..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage} disabled={isSending}>
          {isSending ? "Senden..." : "Senden"}
        </button>
      </div>
    </>
  );
};

export default MessageList;

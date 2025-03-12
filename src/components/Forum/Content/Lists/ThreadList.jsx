import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { BACKEND_URL } from "../../../../const/urls.js";
import ForumContext from "../../../../contexts/ForumContext.jsx";
import ThreadItem from "./Items/ThreadItem.jsx";
import styles from "./List.module.css";

export const ThreadList = () => {
  const { currentThread } = useContext(ForumContext);

  const fetchMessages = async () => {
    const response = await axios.get(
      `${BACKEND_URL}/messages/allMessagesFromThreadId/${currentThread}`,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  };

  const {
    data: msgList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["messages", currentThread],
    queryFn: fetchMessages,
    enabled: !!currentThread,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!msgList) return <p>No messages found</p>;

  return (
    <div className={styles.ThreadList}>
      {/* <div className={styles.ThreadListHeader}>
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
      </div> */}
      <div className={styles.ThreadListContent}>
        {msgList.data &&
          msgList.data.map((msg, index) => (
            <ThreadItem key={`thread-item-${index}`} msg={msg} />
          ))}
      </div>
    </div>
  );
};

export default ThreadList;

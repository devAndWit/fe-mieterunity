import AuthContext from "./../../../../contexts/AuthContext.jsx";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { ForumContext } from "./../../../../contexts/ForumContext.jsx";

import styles from "./List.module.css";

const MessageList = () => {
  const { userId } = useContext(ForumContext);

  const {
    data: dataResponse,
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: [userId],
    queryFn: async () => {
      const response = await fetch(
        // /allMessagesFromTo/:fromUserId/:toUserId
        `${BACKEND_URL}/allMessagesFromTo/:fromUserId/:toUserId`
      );
      const result = await response.json();

      if (result.data) {
        console.log("TYPEOF", typeof result.data);
        setUsers(result.data);
      }
      return result;
    },
  });

  return (
    <>
      <div className={styles.DirectMsgList}></div>
    </>
  );
};

export default MessageList;

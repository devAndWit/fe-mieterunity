import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { tasks } from "../../../const/tasks.js";
import { BACKEND_URL } from "../../../const/urls.js";
import { ForumContext } from "../../../contexts/ForumContext.jsx";
import { anonymizeString } from "../../../utils/anonymizeString.js";
import styles from "./Content.module.css";
import { NewMessage } from "./Dialogs/NewMessage.jsx";
import NewThread from "./Dialogs/NewThread.jsx";
import MessageList from "./Lists/MessageList.jsx";
import SendMessage from './Lists/SendMessage.jsx';
import ThreadList from "./Lists/ThreadList.jsx";

export const Content = () => {
  const { currentTask, currentLocation, currentThread, currentThreadTitle, directMessageToUser } =
    useContext(ForumContext);

  const {
    data: threads,
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: ["thread", currentThread, currentLocation],
    queryFn: async () => {
      const response = await fetch(
        `${BACKEND_URL}/messages/allMessagesFromThreadId/${currentThread}`
      );
      const result = await response.json();

      if (result.data) {
        return result.data;
      }
    },
    enabled: !!currentThread,
  });

  const renderContent = (variant) => {
    switch (variant) {
      case tasks.Thread:
        return <>
          <ThreadList />
          <SendMessage />
        </>
      case tasks.NewThread:
        return <NewThread />
      case tasks.Message:
        return <MessageList />
      case tasks.NewMessage:
        return <NewMessage />
      default:
        return <div>Keine Nachrichten oder Threads vorhanden</div>;
    }
  };

  return (
    <>
      <div className={styles.ContentContainer}>
        <div className={styles.ContentHeadLine}>
          {(currentThreadTitle || directMessageToUser) && <div style={{fontWeight: 'bold'}}>{currentTask === tasks.Thread ? `Thema: ${currentThreadTitle}` : `Nachrichtenverlauf mit ${anonymizeString(directMessageToUser && (directMessageToUser.firstName || directMessageToUser.email))}`}</div>}
          <div className={styles.Content} style={{...(!(currentThreadTitle && directMessageToUser) && { marginTop: 0} )}}>{renderContent(currentTask)}</div>
        </div>
      </div>
    </>
  )
};

export default Content;

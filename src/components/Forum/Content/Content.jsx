import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { tasks } from "../../../const/tasks.js";
import { BACKEND_URL } from "../../../const/urls.js";
import { ForumContext } from "../../../contexts/ForumContext.jsx";
import Thread from "../Sidebar/SidebarTile/Tiles/Thread.jsx";
import ThreadList from "./Lists/ThreadList.jsx"
import styles from "./Content.module.css";
import { NewMessage } from "./Dialogs/NewMessage.jsx";
import NewThread from "./Dialogs/NewThread.jsx";

export const Content = () => {
  const { currentTask, currentLocation, currentThread } =
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
        console.log("RETURN:::", result.data);
        return result.data;
      }
    },
    enabled: !!currentThread,
  });

  const renderContent = (variant) => {
    switch (variant) {
      case tasks.NewThread:
        // return 1;
        return <NewThread />;
      case tasks.Thread:
        return 2;
        return <ThreadList />;
      case tasks.Message:
        return 3;
      // return <NewMessage />;
      default:
        return <div>Keine Nachrichten oder Threads vorhanden</div>;
    }
  };

  return (
    <>
      <div className={styles.ContentHeadLine}>
        <div>{currentTask}</div>
        {Array.isArray(threads) &&
          threads.map((thread) => {
            return <div key={thread._id}>{thread.message}</div>;
          })}
        {renderContent(currentTask)}
      </div>
    </>
  );
};

export default Content;

import { useContext } from "react";
import { ForumContext } from "../../../contexts/ForumContext.jsx";

import { NewThread } from "./Dialogs/NewThread.jsx";
import { NewMessage } from "./Dialogs/NewMessage.jsx";

import styles from "./Content.module.css";

export const Content = () => {
  const { currentTask, currentThread } = useContext(ForumContext);

  if (currentTask == "Thread") {
    <NewThread></NewThread>;
  }

  if (currentTask == "Message") {
    <NewMessage></NewMessage>;
  }

  return (
    <>
      <div className={styles.ContentHeadLine}>
        <div>{currentTask}</div>
        <div>Test</div>
      </div>
    </>
  );
};

export default Content;

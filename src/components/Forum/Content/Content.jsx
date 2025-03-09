import { useContext } from "react";
import { ForumContext } from "../../../contexts/ForumContext.jsx";

import styles from "./Content.module.css";

export const Content = () => {
  const { currentTask } = useContext(ForumContext);

  return (
    <>
      <div className={styles.ContentHeadLine}>
        <div >{currentTask}</div>
        <div>Test</div>
      </div>
    </>
  );
};

export default Content;

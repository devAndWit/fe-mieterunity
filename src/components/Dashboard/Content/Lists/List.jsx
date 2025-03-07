import { useContext } from "react";

import { AuthContext } from "../../../../contexts/AuthContext.jsx";
import { DashboardContext } from "../../../../contexts/DashboardContext.jsx";
import CategoryContent from "./Items/CategoryContent.jsx";
import ThreadContents from "./Items/ThreadContents.jsx";
import DirectMessagesContent from "./Items/DirectMessagesContent.jsx";

import styles from "./List.module.css";

export const List = () => {
  const { activeTile } = useContext(DashboardContext);

  console.log(activeTile);

  if (activeTile === 1) {
    return (
      <>
        <CategoryContent></CategoryContent>
      </>
    );
  }

  if (activeTile === 2) {
    return (
      <>
        <ThreadContents></ThreadContents>
      </>
    );
  }

  if (activeTile === 3) {
    return (
      <>
        <div className={styles.Item}>
          <DirectMessagesContent></DirectMessagesContent>
          
        </div>
      </>
    );
  }
};

export default List;

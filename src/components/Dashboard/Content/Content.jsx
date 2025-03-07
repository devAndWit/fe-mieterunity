import { useContext } from "react";

import List from "./Lists/List.jsx";
import { AuthContext } from "../../../contexts/AuthContext.jsx";
import { DashboardContext } from "..//../../contexts/DashboardContext.jsx";

import styles from "./Content.module.css";

const Content = () => {
  const { activeTile } = useContext(DashboardContext);

  return (
    <>
      <div className={styles.ContentContainer}>
        <div className={styles.Content}>
          <div className={styles.Title}>
            {activeTile === 1 ? <h2 className={styles.List}>Kategorie</h2> : ""}

            {activeTile === 2 ? <h2 className={styles.List}>Thread</h2> : ""}

            {activeTile === 3 ? (
              <h2 className={styles.List}>Direktnachricht</h2>
            ) : (
              ""
            )}
          </div>
          <div className={styles.List}>
            <List></List>
          </div>
        </div>
        {activeTile === 3 ? (
          <div className={styles.Message}>
            <input type="text" name="" id="" placeholder="Deine Nachricht..." />
            <button>senden</button>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Content;

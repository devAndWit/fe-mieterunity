import ForumContextProvider from "../../contexts/Provider/ForumContextProvider.jsx";

import Sidebar from "./Sidebar/Sidebar.jsx";
import Content from "./Content/Content.jsx";

import styles from "./Forum.module.css";

export const Forum = () => {
  return (
    <div className={styles.ForumContainer}>
      <h1>Forum</h1>
      <div className={styles.ForumWrapper}>
        <ForumContextProvider>
          <Sidebar />
          <Content />
        </ForumContextProvider>
      </div>
    </div>
  );
};

export default Forum;

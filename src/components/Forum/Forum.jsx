import { useState } from "react";
import ForumContextProvider from "../../contexts/Provider/ForumContextProvider.jsx";

import Sidebar from "./Sidebar/Sidebar.jsx";
import Content from "./Content/Content.jsx";

import styles from "./Forum.module.css";

export const Forum = () => {
  return (
    <div className={styles.Forum}>
      <ForumContextProvider>
        <Sidebar />
        <Content />
      </ForumContextProvider>
    </div>
  );
};

export default Forum;

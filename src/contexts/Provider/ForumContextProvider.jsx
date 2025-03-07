import { useState } from "react";
import { ForumContext } from "../ForumContext";

export const ForumContextProvider = ({ children }) => {
  const [activeTile, setActiveTile] = useState(0);
  const [categoryId, setCategoryId] = useState(0);
  const [threadId, setThreadId] = useState(0);
  const [directMsgId, setDirectMsgId] = useState(0);

  const value = {
    activeTile,
    setActiveTile,
    categoryId,
    setCategoryId,
    threadId,
    setThreadId,
    directMsgId,
    setDirectMsgId,
  };

  return (
    <ForumContext.Provider value={value}>
      {children}
    </ForumContext.Provider>
  );
};

export default ForumContextProvider;

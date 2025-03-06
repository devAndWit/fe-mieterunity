import { useState } from "react";
import { DashboardContext } from "../DashboardContext";

export const DashboardContextProvider = ({ children }) => {
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
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardContextProvider;

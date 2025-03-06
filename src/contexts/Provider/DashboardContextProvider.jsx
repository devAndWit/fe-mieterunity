import { useState, useContext } from "react";
import { DashboardContext } from "../DashboardContext";

export const DashboardContextProvider = ({ children }) => {
  const [activeTile, setActiveTile] = useState(-1);
  const [categoryId, setCategoryId] = useState("-1");
  const [threadId, setThreadId] = useState("-1");
  const [directMsgId, setDirectMsg] = useState("-1");

  const value = {
    activeTile,
    setActiveTile,
    categoryId,
    setCategoryId,
    threadId,
    setThreadId,
    directMsgId,
    setDirectMsg,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardContextProvider;

// /components/Dashboard/Dashboard.js

import { useState } from "react";
import Sidebar from "./Sidebar/Sidebar.jsx";
import Content from "../Dashboard/Content/Content.jsx";
import DashboardContextProvider from "../../contexts/Provider/DashboardContextProvider.jsx";

export const Dashboard = () => {
  const [selectedContent, setSelectedContent] = useState(null);

  const handleContentChange = (content) => {
    setSelectedContent(content);
  };

  return (
    <DashboardContextProvider>
    <div className="dashboard">
      <Sidebar onSelectContent={handleContentChange} />
      <Content selectedContent={selectedContent} />
    </div>
    </DashboardContextProvider>
  );
};

export default Dashboard;

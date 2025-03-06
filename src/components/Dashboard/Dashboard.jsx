// /components/Dashboard/Dashboard.js

import { useState } from "react";
import Sidebar from "./Sidebar/Sidebar.jsx";
import Content from "../Dashboard/Content/Content.jsx";

export const Dashboard = () => {
  const [selectedContent, setSelectedContent] = useState(null);

  const handleContentChange = (content) => {
    setSelectedContent(content);
  };

  return (
    <div className="dashboard">
      <Sidebar onSelectContent={handleContentChange} />
      <Content selectedContent={selectedContent} />
    </div>
  );
};

export default Dashboard;

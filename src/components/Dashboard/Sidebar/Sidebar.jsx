import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext.jsx";
import { DashboardContext } from "../../../contexts/DashboardContext.jsx";
import SidebarTile from "./SidebarTile/SidebarTile.jsx";
import Category from "./SidebarTile/Category.jsx";
import Thread from "./SidebarTile/Thread.jsx";
import "../Styles/styles.css";

export const Sidebar = () => {
  const { activeTile, setActiveTile } = useContext(DashboardContext);
  const [sidebarData, setSidebarData] = useState({
    categories: [],
    threads: [],
    directMessages: [],
  });

  const handleCategoryClick = () => {
    handleClick(activeTile);
  };

  const handleClick = (value) => {
    setActiveTile(value + 1);
  };

  return (
    <div className="sidebar" onClick={handleCategoryClick}>
      <SidebarTile>
        <Category></Category>
      </SidebarTile>
      <SidebarTile>
        <Thread></Thread>
      </SidebarTile>
      {/* <SidebarTile title="Threads" items={sidebarData.threads} route="/thread" />
      <SidebarTile title="Direct Messages" items={sidebarData.directMessages} route="/direct-messages" /> */}
    </div>
  );
};

export default Sidebar;

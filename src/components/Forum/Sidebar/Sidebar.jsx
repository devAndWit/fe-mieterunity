import { useContext } from "react";
import { AuthContext } from "./../../../contexts/AuthContext.jsx";

import SidebarTile from "./SidebarTile/SidebarTile.jsx";
import DirectMessage from "./SidebarTile/Tiles/DirectMessage.jsx";
import Location from "./SidebarTile/Tiles/Location.jsx";
import Thread from "./SidebarTile/Tiles/Thread.jsx";

import styles from "./Sidebar.module.css";

export const Sidebar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className={styles.Sidebar}>
      <SidebarTile>
        <Location />
      </SidebarTile>
      <SidebarTile>
        <Thread />
      </SidebarTile>
      <SidebarTile>
        <DirectMessage/>
      </SidebarTile>
    </div>
  );
};

export default Sidebar;

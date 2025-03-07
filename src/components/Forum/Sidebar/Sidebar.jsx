import SidebarTile from "./SidebarTile/SidebarTile.jsx";
import Category from "./SidebarTile/Tiles/CategoryTile.jsx";
import Thread from "./SidebarTile/Tiles/ThreadTile.jsx";

import styles from "./Sidebar.module.css";
import DirectMessages from "./SidebarTile/Tiles/DirectMsgTile.jsx";

export const Sidebar = () => {
  return (
    <div className={styles.Sidebar}>
      <SidebarTile>
        <Category></Category>
      </SidebarTile>
      <SidebarTile>
        <Thread></Thread>
      </SidebarTile>
      <SidebarTile>
        <DirectMessages></DirectMessages>
      </SidebarTile>
    </div>
  );
};

export default Sidebar;

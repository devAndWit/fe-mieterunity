import { useEffect, useState, useContext } from "react";
import { AuthContext } from "./../../../contexts/AuthContext.jsx";

import SidebarTile from "./SidebarTile/SidebarTile.jsx";
import Category from "./SidebarTile/Tiles/CategoryTile.jsx";
import Thread from "./SidebarTile/Tiles/ThreadTile.jsx";
import Location from "./SidebarTile/Tiles/LocationTile.jsx";

import styles from "./Sidebar.module.css";
import DirectMessages from "./SidebarTile/Tiles/DirectMsgTile.jsx";

export const Sidebar = () => {
  const { user } = useContext(AuthContext);

  const loacationsCount = user.locations.length;
  return (
    <div className={styles.Sidebar}>
      {loacationsCount > 1 ? (
        <SidebarTile>
          <Location></Location>
        </SidebarTile>
      ) : (
        ""
      )}

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

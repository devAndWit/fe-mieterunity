import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext.jsx";

import SidebarTile from "./SidebarTile/SidebarTile.jsx";
import Category from "./SidebarTile/Category.jsx";
import Thread from "./SidebarTile/Thread.jsx";

import styles from "./Sidebar.module.css";

export const Sidebar = () => {
  return (
    <div className={styles.Sidebar}>
      <SidebarTile>
        <Category></Category>
      </SidebarTile>
      <SidebarTile>
        <Thread></Thread>
      </SidebarTile>
    </div>
  );
};

export default Sidebar;

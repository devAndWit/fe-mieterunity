import { useContext } from "react";

import styles from "./SidebarTile.module.css";

export function SidebarTile({ children }) {
  return (
    <>
      <div className={styles.SideBar}>{children}</div>
    </>
  );
}

export default SidebarTile;

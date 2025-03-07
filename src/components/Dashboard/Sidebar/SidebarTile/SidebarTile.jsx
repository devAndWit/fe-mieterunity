import { useContext } from "react";

import styles from "./SidebarTile.module.css";

export function SidebarTile({ children }) {
  return (
    <>
      <div className={styles.SideBarTile}>{children}</div>
    </>
  );
}

export default SidebarTile;

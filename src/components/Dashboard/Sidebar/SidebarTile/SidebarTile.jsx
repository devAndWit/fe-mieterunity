import { useContext } from "react";
import DashboardContext from "../../../../contexts/DashboardContext.jsx";

export function SidebarTile({ children }) {
  const { activeTile, setActiveTile } = useContext(DashboardContext);
  return (
    <>
      <span>{activeTile}</span>
      {children}
    </>
  );
}

export default SidebarTile;

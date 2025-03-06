import { useContext, useEffect } from "react";
import DashboardContext from "../../../contexts/DashboardContext";
import styles from "./Content.module.css";

export const Content = ({ selectedContent }) => {
  const { activeTile, setActiveTile } = useContext(DashboardContext);

  return <div>{activeTile}</div>;
};

export default Content;

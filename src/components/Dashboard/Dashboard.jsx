import { useState } from "react";
import DashboardContextProvider from "../../contexts/Provider/DashboardContextProvider.jsx";

import Sidebar from "./Sidebar/Sidebar.jsx";
import Content from "../Dashboard/Content/Content.jsx";

import styles from "./Dashboard.module.css";

export const Dashboard = () => {
  return (
    <div className={styles.Dashboard}>
      <DashboardContextProvider>
        <Sidebar />
        <Content />
      </DashboardContextProvider>
    </div>
  );
};

export default Dashboard;

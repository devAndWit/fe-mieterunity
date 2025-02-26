import { Outlet } from "react-router-dom";

import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer/Footer.jsx";

export const OpenLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default OpenLayout;

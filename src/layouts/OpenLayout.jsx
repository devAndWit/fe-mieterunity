import { Outlet } from "react-router-dom";
import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import "../styles/global.css";
import "../styles/variables.css";

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

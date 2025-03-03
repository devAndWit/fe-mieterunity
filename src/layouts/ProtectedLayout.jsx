import { Outlet } from "react-router-dom";
import { Header } from "../components/Header.jsx";
import { Menu } from "../components/Menu/Menu.jsx";
import { Footer } from "../components/Footer/Footer.jsx";

export const ProtectedLayout = () => {
  return (
    <>
      <Header />
      <Menu />
      <Outlet />
      <Footer />
    </>
  );
};

export default ProtectedLayout;

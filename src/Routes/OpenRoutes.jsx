import { Route, Routes } from "react-router-dom";
import { OpenLayout } from "../layouts/OpenLayout.jsx";
import { Home } from "../pages/Home.jsx";
import { About } from "../pages/About.jsx";
import { Contact } from "../pages/Contact.jsx";
import { Mission } from "../pages/Mission.jsx";
import { SignUp } from "../pages/SignUp.jsx";
import { Login } from "../pages/Login.jsx";

export const OpenRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<OpenLayout />}>
        <Route index element={<Home />} />
        <Route path="mission" element={<Mission />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
};

export default OpenRoutes;

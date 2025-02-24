import { Routes, Route } from "react-router-dom";
import { OpenLayout } from "../layouts/OpenLayout.jsx";
import { Home } from "../components/Home.jsx";
import { Contact } from "../components/Contact.jsx";
import { About } from "../components/About.jsx";
import { Mission } from "../components/Mission.jsx";
import { SignUp } from "../components/SignUp.jsx";
import { Login } from "../components/Login.jsx";

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

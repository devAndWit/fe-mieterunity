import { Route, Routes } from "react-router-dom";
import { OpenLayout } from "../layouts/OpenLayout.jsx";
import { Home } from "../components/Home/Home.jsx";
import { Contact } from "../components/Contact/Contact.jsx";
import { Login } from "../components/Login/Login.jsx";
import { SignUp } from "../components/Signup/SignUp.jsx";
import { PrivacyPolicy } from "../components/PrivacyPolicy/PrivacyPolicy.jsx";
import { LegalNotice } from "../components/LegalNotice/LegalNotice.jsx";
import { NotFound } from "../components/NotFound/NotFound.jsx";
import Thread  from "../components/Thread.jsx";


export const OpenRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<OpenLayout />}>
        <Route index element={<Home />} />

        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="privacypolicy" element={<PrivacyPolicy />} />
        <Route path="legalnotice" element={<LegalNotice />} />
        <Route path="thread/:channelId" element={<Thread />} />

        {"NotFound"}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default OpenRoutes;

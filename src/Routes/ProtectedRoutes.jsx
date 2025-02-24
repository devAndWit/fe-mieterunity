import { Routes, Route } from "react-router-dom";
import { ProtectedLayout } from "../layouts/ProtectedLayout.jsx";
import { Profile } from "../components/Profile.jsx";
import { Personal } from "../components/Personal.jsx";
import { Locations } from "../components/Locations.jsx";
import { Settings } from "../components/Settings.jsx";
import { Account } from "../components/Account.jsx";
import { Password } from "../components/Password.jsx";
import { Logout } from "../components/Logout.jsx";
import { Home } from "../components/Home.jsx";

export const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedLayout />}>
        <Route index element={<Home />} />
        <Route path="logout" element={<Logout />} />
      </Route>

      <Route path="/profile" element={<Profile />}>
        <Route index element={<Personal />} />
        <Route path="locations" element={<Locations />} />
        <Route path="settings" element={<Settings />} />
        <Route path="account" element={<Account />} />
        <Route path="password" element={<Password />} />
      </Route>
    </Routes>
  );
};

export default ProtectedRoutes;

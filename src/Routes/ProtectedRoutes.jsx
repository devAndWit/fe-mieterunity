import { Route, Routes } from "react-router-dom";
import { ProtectedLayout } from "../layouts/ProtectedLayout.jsx";
import { Locations } from "../components/Locations/Locations.jsx";
import { Settings } from "../components/Settings.jsx";
import { Account } from "../components/Account.jsx";
import { Password } from "../components/Password.jsx";
import { Logout } from "../components/Logout.jsx";
import { Profile } from "../components/Profile.jsx";
import { NotFound } from "../pages/NotFound.jsx";

export const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedLayout />}>
        <Route index element={<Profile />} />
        <Route path="logout" element={<Logout />} />
        <Route path="locations" element={<Locations />} />
        <Route path="settings" element={<Settings />} />
        <Route path="account" element={<Account />} />
        <Route path="password" element={<Password />} />

        {"NotFound"}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default ProtectedRoutes;

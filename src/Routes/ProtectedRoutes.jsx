import { Route, Routes, useNavigate } from "react-router-dom";
import { ProtectedLayout } from "../layouts/ProtectedLayout.jsx";
import { Locations } from "../components/Locations/Locations.jsx";
import { Settings } from "../components/Settings/Settings.jsx";
import { Account } from "../components/Account/Account.jsx";
import { Password } from "../components/Password/Password.jsx";
import { Profile } from "../components/Profile/Profile.jsx";
import { NotFound } from "../components/NotFound/NotFound.jsx";

import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext.jsx";

export const ProtectedRoutes = () => {
  const navigate = useNavigate();

  const { isAuthenticated } = useContext(AuthContext);
  console.log("ProtectedRoutes - isAuthenticated :", isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) return null;

  return (
    <Routes>
      <Route path="/" element={<ProtectedLayout />}>
        <Route index element={isAuthenticated ? <Profile /> : navigate("/")} />

        <Route
          path="locations"
          element={isAuthenticated ? <Locations /> : navigate("/")}
        />
        <Route
          path="settings"
          element={isAuthenticated ? <Settings /> : navigate("/")}
        />
        <Route
          path="account"
          element={isAuthenticated ? <Account /> : navigate("/")}
        />
        <Route
          path="password"
          element={isAuthenticated ? <Password /> : navigate("/")}
        />

        {"NotFound"}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default ProtectedRoutes;

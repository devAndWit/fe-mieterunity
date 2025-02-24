import { Routes, Route } from "react-router-dom";
import { NotFound } from "../pages/NotFound.jsx";

export const NotFoundRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default NotFoundRoutes;

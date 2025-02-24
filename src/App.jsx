import { Routes, Route } from "react-router-dom";

import OpenRoutes from "../src/routes/OpenRoutes.jsx";
import ProtectedRoutes from "../src/routes/ProtectedRoutes.jsx";
import NotFoundRoutes from "./routes/NotFoundRoutes.jsx";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<OpenRoutes />} />
        <Route path="/profile/*" element={<ProtectedRoutes />} />
        <Route path="*" element={<NotFoundRoutes />} />
      </Routes>
    </div>
  );
}

export default App;

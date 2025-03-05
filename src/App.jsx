import { Routes, Route } from "react-router-dom";

import OpenRoutes from "../src/routes/OpenRoutes.jsx";
import ProtectedRoutes from "./routes/ProtectedRoutes.jsx";
// import Bahman from "./components/Test/Bahman.jsx";

import "./App.css";

function App() {
  return (
    <>
      {/* <Bahman>
        <div>Schöne Grüße aus Bonn</div>
        <ul>
          <li>test 1</li>
        </ul>
      </Bahman> */}

      <div className="siteContent">
        <Routes>
          <Route path="/profile/*" element={<ProtectedRoutes />} />
          <Route path="/*" element={<OpenRoutes />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

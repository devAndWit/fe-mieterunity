import { Route, Routes } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import OpenRoutes from "../src/routes/OpenRoutes.jsx";
import "./App.css";
import ProtectedRoutes from "./routes/ProtectedRoutes.jsx";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="siteContent">
        <Routes>
          <Route path="/profile/*" element={<ProtectedRoutes />} />
          <Route path="/*" element={<OpenRoutes />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;

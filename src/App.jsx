import { Route, Routes } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import OpenRoutes from "../src/routes/OpenRoutes.jsx";
import ProtectedRoutes from "./routes/ProtectedRoutes.jsx";

import "./App.css";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/profile/*" element={<ProtectedRoutes />} />
        <Route path="/*" element={<OpenRoutes />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;

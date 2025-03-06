/* import { Routes, Route } from "react-router-dom";

import OpenRoutes from "../src/routes/OpenRoutes.jsx";
import ProtectedRoutes from "./routes/ProfileRoutes.jsx";
import Thread from  "../src/components/Thread.jsx"

//import "./App.css";

function App() {
  return (
    <>


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
 */

// /src/App.jsx
// /src/App.jsx

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Dashboard/Sidebar/Sidebar.jsx';
import CategoryContent from './components/Dashboard/Content/CategoryContents.jsx';
import ThreadContent from './components/Dashboard/Content/ThreadContents.jsx';
import DirectMessagesContent from './components/Dashboard/Content/DirectMessagesContent.jsx';
import './components/Dashboard/Styles/styles.css';

function App() {
  return (
   
      <div className="dashboard">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/category" element={<CategoryContent />} />
            <Route path="/thread" element={<ThreadContent />} />
            <Route path="/direct-messages" element={<DirectMessagesContent />} />
            <Route path="/" element={<h2>Welcome to the Dashboard</h2>} />
          </Routes>
        </div>
      </div>
   
  );
}

export default App;



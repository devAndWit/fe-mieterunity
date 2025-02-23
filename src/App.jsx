import { Routes, Route } from "react-router-dom";

{
  /* <OpenLayout /> */
}
import { OpenLayout } from "./layouts/OpenLayout.jsx";
import { Home } from "./components/Home.jsx";
import { Contact } from "./components/Contact.jsx";
import { About } from "./components/About.jsx";
import { Mission } from "./components/Mission.jsx";
import { SignUp } from "./components/SignUp.jsx";
import { Login } from "./components/Login.jsx";

{
  /* <ProtectedLayout /> */
}
import ProtectedLayout from "./layouts/ProtectedLayout.jsx";

import "./App.css";
import Profile from "./components/Profile.jsx";
import Logout from "./components/Logout.jsx";

function App() {
  return (
    <div>
      <Routes>
        {/* <OpenLayout /> */}
        <Route path="/" element={<OpenLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/mission" element={<Mission />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>

          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Route>

        {/* <ProtectedLayout /> */}
        <Route path="/" element={<ProtectedLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

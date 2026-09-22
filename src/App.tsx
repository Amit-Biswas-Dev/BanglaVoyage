import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Tours from "./pages/Tours";
import Destinations from "./pages/Destinations";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Pages */}
        <Route path="/" element={<Home />} />

        <Route path="/tours" element={<Tours />} />

        <Route
          path="/destinations"
          element={<Destinations />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* Authentication */}
        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Tours from "./pages/Tours";
import Destinations from "./pages/Destinations";
import TourDetails from "./pages/TourDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/tours" element={<Tours />} />

        <Route
          path="/tours/:id"
          element={<TourDetails />}
        />

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
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Documents from "./pages/Documents";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TrackApplication from "./pages/TrackApplication";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route
        path="/documents"
        element={
          <ProtectedRoute>
            <Documents />
          </ProtectedRoute>
        }
      />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/track-application" element={<TrackApplication />} />
    </Routes>
  );
}

export default App;

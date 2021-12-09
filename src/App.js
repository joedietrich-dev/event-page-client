import { BrowserRouter as Router, Routes, Route, Redirect } from "react-router-dom";
import Events from "./components/Events";
import Home from "./components/Home";
import Sponsors from "./components/Sponsors";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/sponsors" element={<Sponsors />} />
      </Routes>
    </Router>
  );
}

export default App;

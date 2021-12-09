import { BrowserRouter as Router, Routes, Route, Redirect } from "react-router-dom";
import Events from "./components/Events";
import Home from "./components/Home";
import Honorees from "./components/Honorees";
import Hosts from "./components/Hosts";
import Panelists from "./components/Panelists";
import Panels from "./components/Panels";
import Sponsors from "./components/Sponsors";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/panels" element={<Panels />} />
        <Route path="/panelists" element={<Panelists />} />
        <Route path="/hosts" element={<Hosts />} />
        <Route path="/honorees" element={<Honorees />} />
      </Routes>
    </Router>
  );
}

export default App;

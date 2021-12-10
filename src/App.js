import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Events from "./components/Event/Events";
import Event from "./components/Event/Event";
import Honorees from "./components/Honoree/Honorees";
import Hosts from "./components/Host/Hosts";
import Panelists from "./components/Panelist/Panelists";
import Panels from "./components/Panel/Panels";
import Sponsors from "./components/Sponsor/Sponsors";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="events" element={<Events />} />
          <Route path="events/:eventId/view" element={<Event />} />
          <Route path="sponsors" element={<Sponsors />} />
          <Route path="panels" element={<Panels />} />
          <Route path="panelists" element={<Panelists />} />
          <Route path="hosts" element={<Hosts />} />
          <Route path="honorees" element={<Honorees />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

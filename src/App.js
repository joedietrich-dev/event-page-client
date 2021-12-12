import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Events from "./components/Event/Events";
import EventView from "./components/Event/EventView";
import Honorees from "./components/Honoree/Honorees";
import Hosts from "./components/Host/Hosts";
import Panelists from "./components/Panelist/Panelists";
import Panels from "./components/Panel/Panels";
import Sponsors from "./components/Sponsor/Sponsors";
import EventEdit from "./components/Event/EventEdit";
import SponsorEdit from "./components/Sponsor/SponsorEdit";
import SponsorNew from "./components/Sponsor/SponsorNew";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="events" element={<Events />} />
          <Route path="events/:eventId/view" element={<EventView />} />
          <Route path="events/:eventId/edit" element={<EventEdit />} />
          <Route path="sponsors" element={<Sponsors />} />
          <Route path="sponsors/new" element={<SponsorNew />} />
          <Route path="sponsors/:sponsorId/edit" element={<SponsorEdit />} />
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

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Events from "./components/Event/Events";
import EventView from "./components/Event/EventView";
import EventEdit from "./components/Event/EventEdit";
import Honorees from "./components/Honoree/Honorees";
import HonoreeNew from "./components/Honoree/HonoreeNew";
import HonoreeEdit from "./components/Honoree/HonoreeEdit";
import Hosts from "./components/Host/Hosts";
import HostNew from "./components/Host/HostNew";
import HostEdit from "./components/Host/HostEdit";
import Panelists from "./components/Panelist/Panelists";
import PanelistNew from "./components/Panelist/PanelistNew";
import PanelistEdit from "./components/Panelist/PanelistEdit";
import Panels from "./components/Panel/Panels";
import PanelNew from "./components/Panel/PanelNew";
import PanelEdit from "./components/Panel/PanelEdit";
import Sponsors from "./components/Sponsor/Sponsors";
import SponsorNew from "./components/Sponsor/SponsorNew";
import SponsorEdit from "./components/Sponsor/SponsorEdit";
import EventNew from "./components/Event/EventNew";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="events" element={<Events />} />
          <Route path="events/new" element={<EventNew />} />
          <Route path="events/:eventId/view" element={<EventView />} />
          <Route path="events/:eventId/edit" element={<EventEdit />} />
          <Route path="sponsors" element={<Sponsors />} />
          <Route path="sponsors/new" element={<SponsorNew />} />
          <Route path="sponsors/:sponsorId/edit" element={<SponsorEdit />} />
          <Route path="panels" element={<Panels />} />
          <Route path="panels/new" element={<PanelNew />} />
          <Route path="panels/:panelId/edit" element={<PanelEdit />} />
          <Route path="panelists" element={<Panelists />} />
          <Route path="panelists/new" element={<PanelistNew />} />
          <Route path="panelists/:panelistId/edit" element={<PanelistEdit />} />
          <Route path="hosts" element={<Hosts />} />
          <Route path="hosts/new" element={<HostNew />} />
          <Route path="hosts/:hostId/edit" element={<HostEdit />} />
          <Route path="honorees" element={<Honorees />} />
          <Route path="honorees/new" element={<HonoreeNew />} />
          <Route path="honorees/:honoreeId/edit" element={<HonoreeEdit />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

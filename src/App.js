import { BrowserRouter as Router, Routes, Route, Redirect } from "react-router-dom";
import Events from "./components/Events";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  );
}

export default App;

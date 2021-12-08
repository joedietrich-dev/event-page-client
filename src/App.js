import { BrowserRouter as Router, Routes, Route, Redirect } from "react-router-dom";
import Landing from "./components/Landing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

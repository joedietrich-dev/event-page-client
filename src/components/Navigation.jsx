import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/events">Events</NavLink>
        </li>
        <li>
          <NavLink to="/sponsors">Sponsors</NavLink>
        </li>
        <li>
          <NavLink to="/panels">Panels</NavLink>
        </li>
        <li>
          <NavLink to="/panelists">Panelists</NavLink>
        </li>
        <li>
          <NavLink to="/hosts">Hosts</NavLink>
        </li>
        <li>
          <NavLink to="/honorees">Honorees</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navigation;

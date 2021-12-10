import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

function Layout() {
  return (
    <div>
      <Navigation />
      <hr />
      <Outlet />
    </div>
  );
}

export default Layout;
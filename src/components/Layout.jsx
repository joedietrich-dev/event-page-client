import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

function Layout() {
  return (
    <div>
      <Navigation />
      <hr />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
}

export default Layout;

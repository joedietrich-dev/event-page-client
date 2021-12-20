import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

function Layout() {
  return (
    <div>
      <Navigation />
      <hr />
      <Container sx={{ position: "relative", marginBottom: 10 }}>
        <Outlet />
      </Container>
    </div>
  );
}

export default Layout;

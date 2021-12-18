import { Button, Paper, Stack, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const Link = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Navigation() {
  return (
    <nav>
      <Stack direction="row" justifyContent="center">
        <Link component={NavLink} to="/">
          Home
        </Link>
        <Link component={NavLink} to="/events">
          Events
        </Link>
        <Link component={NavLink} to="/sponsors">
          Sponsors
        </Link>
        <Link component={NavLink} to="/panels">
          Panels
        </Link>
        <Link component={NavLink} to="/panelists">
          Panelists
        </Link>
        <Link component={NavLink} to="/hosts">
          Hosts
        </Link>
        <Link component={NavLink} to="/honorees">
          Honorees
        </Link>
      </Stack>
    </nav>
  );
}
export default Navigation;

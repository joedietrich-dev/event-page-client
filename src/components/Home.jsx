import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ForumIcon from "@mui/icons-material/Forum";
import { Link } from "react-router-dom";

const appNav = [
  { icon: <LocalActivityIcon />, to: "/events", text: "Events" },
  { icon: <MonetizationOnIcon />, to: "/sponsors", text: "Sponsors" },
  { icon: <ForumIcon />, to: "/panels", text: "Panels" },
  { icon: <PeopleAltIcon />, to: "/panelists", text: "Panelists" },
];
const NavItem = ({ icon, to, text }) => (
  <Link to={to}>
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  </Link>
);

function Home() {
  return (
    <Paper sx={{ width: "100%", maxWidth: 360 }} elevation={3}>
      <nav aria-label="main page navigation">
        <List>
          {appNav.map((item) => (
            <NavItem key={item.text} {...item} />
          ))}
        </List>
      </nav>
    </Paper>
  );
}

export default Home;

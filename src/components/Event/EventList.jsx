import { List, ListItem, ListItemButton, ListItemText, Paper } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
function EventList({ events }) {
  return (
    <Paper elevation={1}>
      <List>
        {events.map((event) => (
          <ListItem key={event.id}>
            <ListItemText primary={event.title} secondary={event.description} />
            <ListItemButton sx={{ flex: "0 0 auto" }}>
              <Link to={`${event.id}/view`}>
                <VisibilityIcon />
              </Link>
            </ListItemButton>
            <ListItemButton sx={{ flex: "0 0 auto" }}>
              <Link to={`${event.id}/edit`}>
                <EditIcon />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default EventList;

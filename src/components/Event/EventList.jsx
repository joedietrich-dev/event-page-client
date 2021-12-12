import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
function EventList({ events }) {
  return (
    <List>
      {events.map((event) => (
        <ListItem key={event.id}>
          <ListItemText primary={event.title} secondary={event.description} />
          <ListItemButton>
            <Link to={`${event.id}/view`}>
              <VisibilityIcon />
            </Link>
          </ListItemButton>
          <ListItemButton>
            <Link to={`${event.id}/edit`}>
              <EditIcon />
            </Link>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

export default EventList;

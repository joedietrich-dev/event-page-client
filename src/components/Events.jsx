import { List, ListItem, ListItemButton, ListItemText, Paper } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import { useState, useEffect } from "react";

function Events() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_ROOT}/events`)
      .then((res) => res.json())
      .then(setEvents)
      .catch(console.log);
  }, []);

  return (
    <Paper>
      <List>
        {events.map((event) => (
          <ListItem key={event.id}>
            <ListItemText primary={event.title} secondary={event.description} />
            <ListItemButton>
              <VisibilityIcon />
            </ListItemButton>
            <ListItemButton>
              <EditIcon />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default Events;

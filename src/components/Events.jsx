import { List, ListItem, ListItemText, Paper } from "@mui/material";
import { useState, useEffect } from "react";

function Events() {
  const [events, setEvents] = useState([1, 2, 3, 4]);
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
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default Events;

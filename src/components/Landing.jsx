import { List, ListItem } from "@mui/material";
import { useState, useEffect } from "react";

function Landing() {
  const [events, setEvents] = useState([1, 2, 3, 4]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_ROOT}/events`)
      .then((res) => res.json())
      .then(setEvents)
      .catch(console.log);
  }, []);

  return (
    <List>
      {events.map((event) => (
        <ListItem key={event.id}>
          {event.title} - {event.description}
        </ListItem>
      ))}
    </List>
  );
}

export default Landing;

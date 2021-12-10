import { List, ListItem, ListItemButton, ListItemText, Paper } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

function Event() {
  const [event, setEvent] = useState([]);
  const { eventId } = useParams();
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_ROOT}/events/${eventId}`)
      .then((res) => res.json())
      .then(setEvent)
      .catch(console.log);
  }, [eventId]);

  return <p>{event.title}</p>;
}

export default Event;

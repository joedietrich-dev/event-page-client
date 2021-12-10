import { useState, useEffect } from "react";
import EventList from "./EventList";

function Events() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_ROOT}/events`)
      .then((res) => res.json())
      .then(setEvents)
      .catch(console.log);
  }, []);

  return <EventList events={events} />;
}

export default Events;

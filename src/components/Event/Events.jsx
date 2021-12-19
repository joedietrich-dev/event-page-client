import { useState, useEffect } from "react";
import NewButton from "../Common/NewButton";
import PageHeader from "../Common/PageHeader";
import EventList from "./EventList";

function Events() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_ROOT}/events`)
      .then((res) => res.json())
      .then(setEvents)
      .catch(console.log);
  }, []);

  return (
    <>
      <PageHeader text="View All Events" />
      <NewButton to="new" content="New Event" />
      <EventList events={events} />
    </>
  );
}

export default Events;

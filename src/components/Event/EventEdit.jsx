import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function EventEdit() {
  const [event, setEvent] = useState([]);
  const { eventId } = useParams();
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_ROOT}/events/${eventId}`)
      .then((res) => res.json())
      .then((event) => console.log(event))
      .catch(console.log);
  }, [eventId]);

  return (
    <div>
      <h1>Edit Event {event.id}</h1>
      <form></form>
    </div>
  );
}

export default EventEdit;

import { useEffect, useState } from "react";

function Honorees() {
  const [honorees, setHonorees] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_ROOT}/honorees`)
      .then((res) => res.json())
      .then(setHonorees)
      .catch(console.log);
  }, []);
  return (
    <ul>
      {honorees.map((honoree) => (
        <li key={honoree.id}>
          {honoree.name} - {honoree.event_id}
        </li>
      ))}
    </ul>
  );
}

export default Honorees;

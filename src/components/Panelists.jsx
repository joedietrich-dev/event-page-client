import { useEffect, useState } from "react";

function Panelists() {
  const [panelists, setPanelists] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_ROOT}/panelists`)
      .then((res) => res.json())
      .then(setPanelists)
      .catch(console.log);
  }, []);
  return (
    <ul>
      {panelists.map((panelist) => (
        <li key={panelist.id}>
          {panelist.name} - {panelist.title} - {panelist.company}
        </li>
      ))}
    </ul>
  );
}

export default Panelists;

import { useEffect, useState } from "react";

function Panels() {
  const [panels, setpanels] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_ROOT}/panels`)
      .then((res) => res.json())
      .then(setpanels)
      .catch(console.log);
  }, []);
  return (
    <ul>
      {panels.map((panel) => (
        <li>
          <h3>{panel.title}</h3>
          <p>{panel.time}</p>
          <p>{panel.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default Panels;

import { useEffect, useState } from "react";

function Hosts() {
  const [hosts, setHosts] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_ROOT}/hosts`)
      .then((res) => res.json())
      .then(setHosts)
      .catch(console.log);
  }, []);
  return (
    <ul>
      {hosts.map((host) => (
        <li key={host.id}>
          {host.name} - {host.event_id}
        </li>
      ))}
    </ul>
  );
}

export default Hosts;

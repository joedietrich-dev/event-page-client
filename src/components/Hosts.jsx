import { useEffect, useState } from "react";
import HostList from "./HostList";

function Hosts() {
  const [hosts, setHosts] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_ROOT}/hosts`)
      .then((res) => res.json())
      .then(setHosts)
      .catch(console.log);
  }, []);
  return <HostList hosts={hosts} />;
}

export default Hosts;

import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HostList from "./HostList";

function Hosts() {
  const [hosts, setHosts] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_ROOT}/hosts`)
      .then((res) => res.json())
      .then(setHosts)
      .catch(console.log);
  }, []);
  return (
    <>
      <Link to="new">
        <Button startIcon={<AddIcon />} variant="contained">
          New Host
        </Button>
      </Link>
      <HostList hosts={hosts} />
    </>
  );
}

export default Hosts;

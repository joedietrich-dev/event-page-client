import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { Link } from "react-router-dom";
import HostList from "./HostList";
import useFetch from "../../hooks/useFetch";

function Hosts() {
  const { data: hosts } = useFetch(`${process.env.REACT_APP_API_ROOT}/hosts`);

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

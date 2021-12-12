import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import SponsorList from "./SponsorList";
import { Link } from "react-router-dom";

function Sponsors() {
  const [sponsors, setSponsors] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_ROOT}/sponsors`)
      .then((res) => res.json())
      .then(setSponsors)
      .catch(console.log);
  }, []);
  return (
    <>
      <Link to="new">
        <Button startIcon={<AddIcon />} variant="contained">
          New Sponsor
        </Button>
      </Link>
      <SponsorList sponsors={sponsors} />
    </>
  );
}

export default Sponsors;

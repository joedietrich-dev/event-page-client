import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import SponsorList from "./SponsorList";
import { Link } from "react-router-dom";
import NewButton from "../Common/NewButton";

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
      <NewButton to="new" content="New Sponsor" />
      <SponsorList sponsors={sponsors} />
    </>
  );
}

export default Sponsors;

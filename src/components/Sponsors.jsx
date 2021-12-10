import { useEffect, useState } from "react";
import SponsorList from "./SponsorList";

function Sponsors() {
  const [sponsors, setSponsors] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_ROOT}/sponsors`)
      .then((res) => res.json())
      .then(setSponsors)
      .catch(console.log);
  }, []);
  return <SponsorList sponsors={sponsors} />;
}

export default Sponsors;

import { useEffect, useState } from "react";

function Sponsors() {
  const [sponsors, setSponsors] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_ROOT}/sponsors`)
      .then((res) => res.json())
      .then(setSponsors)
      .catch(console.log);
  }, []);
  return (
    <ul>
      {sponsors.map((sponsor) => (
        <li>
          <img src={sponsor.logo_src} alt={sponsor.name} width="100" />
          {sponsor.name}
        </li>
      ))}
    </ul>
  );
}

export default Sponsors;

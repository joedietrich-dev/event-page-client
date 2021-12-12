import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

function SponsorList({ sponsors }) {
  return (
    <>
      <Typography variant="h3" component="h1">
        View All Sponsors
      </Typography>
      <ul>
        {sponsors.map((sponsor) => (
          <li key={sponsor.id}>
            <img src={sponsor.logo_src} alt={sponsor.name} width="100" />
            {sponsor.name}
            <Link to={`/sponsors/${sponsor.id}/edit`}>Edit</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default SponsorList;

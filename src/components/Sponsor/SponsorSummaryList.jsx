import { Button, Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import RemoveCircle from "@mui/icons-material/RemoveCircle";

function SponsorSummaryList({ sponsors = [], panel = { id: 0 }, setData = (f) => f, hasRemove = false }) {
  const handleRemoveSponsor = (sponsorId) => {
    fetch(`${process.env.REACT_APP_API_ROOT}/panels/${panel.id}/sponsors/${sponsorId}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        const newSponsors = sponsors.filter((sponsor) => sponsor.id !== sponsorId);
        setData((oldSponsors) => ({ ...oldSponsors, sponsors: newSponsors }));
      }
    });
  };

  return (
    <Paper elevation={1}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Logo</TableCell>
            {hasRemove && <TableCell align="center">Remove</TableCell>}
            <TableCell align="center">Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sponsors.map((sponsor) => (
            <TableRow key={sponsor.id}>
              <TableCell>{sponsor.name}</TableCell>
              <TableCell>
                <img src={sponsor.logo_src} alt={sponsor.name} width="100" />
              </TableCell>
              {hasRemove && (
                <TableCell align="center">
                  <Button color="warning" onClick={() => handleRemoveSponsor(sponsor.id)}>
                    <RemoveCircle />
                  </Button>
                </TableCell>
              )}
              <TableCell align="center">
                <Button component={Link} to={`/sponsors/${sponsor.id}/edit`}>
                  <EditIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default SponsorSummaryList;

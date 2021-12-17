import { Button, Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";

function SponsorSummaryList({ sponsors }) {
  return (
    <Paper elevation={1}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Logo</TableCell>
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
              <TableCell align="center">
                <Link to={`${sponsor.id}/edit`}>
                  <Button>
                    <EditIcon />
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default SponsorSummaryList;
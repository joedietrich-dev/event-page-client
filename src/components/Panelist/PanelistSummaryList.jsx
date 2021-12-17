import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import Check from "@mui/icons-material/Check";

function PanelistSummaryList({ panelists }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Panelist</TableCell>
          <TableCell align="center">Moderator</TableCell>
          <TableCell align="center">Edit</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {panelists.map((panelist) => (
          <TableRow key={panelist.id}>
            <TableCell>
              <strong>{panelist.name}</strong>
              <br />
              <em>{panelist.title}</em>
              <br />
              {panelist.company}
            </TableCell>
            <TableCell align="center">{panelist?.is_moderator ? <Check /> : ""}</TableCell>
            <TableCell align="center">
              <Link to={`${panelist.id}/edit`}>
                <Button>
                  <EditIcon />
                </Button>
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default PanelistSummaryList;

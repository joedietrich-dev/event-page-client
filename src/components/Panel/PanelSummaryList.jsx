import Check from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { Link } from "react-router-dom";

function PanelSummaryList({ panels, includeModerator = false }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Title</TableCell>
          <TableCell>Event</TableCell>
          {includeModerator && <TableCell align="center">Moderator</TableCell>}
          <TableCell align="center">Edit</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {panels.map((panel) => (
          <TableRow>
            <TableCell>{panel.title}</TableCell>
            <TableCell>{panel.event}</TableCell>
            {includeModerator && <TableCell align="center">{panel?.is_moderator ? <Check /> : ""}</TableCell>}
            <TableCell align="center">
              <Link to={`/panels/${panel.id}/edit`}>
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

export default PanelSummaryList;

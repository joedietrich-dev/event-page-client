import EditIcon from "@mui/icons-material/Edit";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { Link } from "react-router-dom";

function SponsorEvents({ event_sponsors = [] }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Event</TableCell>
          <TableCell>Rank</TableCell>
          <TableCell>Edit</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {event_sponsors.map(({ event, event_sponsor_level }) => (
          <TableRow>
            <TableCell>{event.title}</TableCell>
            <TableCell>{event_sponsor_level.name}</TableCell>
            <TableCell>
              <Link to={`/events/${event.id}/edit`}>
                <EditIcon />
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default SponsorEvents;

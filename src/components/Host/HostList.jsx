import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

function HostList({ hosts }) {
  return (
    <>
      <Typography variant="h3" component="h1">
        View All Hosts
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Host Name</TableCell>
            <TableCell>Event ID</TableCell>
            <TableCell>Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {hosts.map((host) => (
            <TableRow key={host.id}>
              <TableCell>{host.name}</TableCell>
              <TableCell>
                <Link to={`/events/${host.event_id}/edit`}>{host.event_id}</Link>
              </TableCell>
              <TableCell>
                <Link to={`${host.id}/edit`}>
                  <EditIcon />
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default HostList;

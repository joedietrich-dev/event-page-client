import { Button, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

function HostList({ hosts }) {
  return (
    <>
      <Typography variant="h3" component="h1">
        View All Hosts
      </Typography>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Host Name</TableCell>
              <TableCell>Event ID</TableCell>
              <TableCell align="center">Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {hosts.map((host) => (
              <TableRow key={host.id}>
                <TableCell component="th" scope="row">
                  {host.name}
                </TableCell>
                <TableCell>
                  <Link to={`/events/${host.event_id}/edit`}>{host.event_id}</Link>
                </TableCell>
                <TableCell align="center">
                  <Link to={`${host.id}/edit`}>
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
    </>
  );
}

export default HostList;

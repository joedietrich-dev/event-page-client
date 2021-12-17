import { Button, Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import RemoveCircle from "@mui/icons-material/RemoveCircle";

function HostSummaryList({ hosts, event = { id: 0 }, setData = (f) => f, hasRemove = false, includeEventId = false }) {
  const handleRemoveHost = (hostId) => {
    fetch(`${process.env.REACT_APP_API_ROOT}/events/${event.id}/hosts/${hostId}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        const newHosts = hosts.filter((host) => host.id !== hostId);
        setData((oldHosts) => ({ ...oldHosts, hosts: newHosts }));
      }
    });
  };
  return (
    <>
      <Paper elevation={1}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Host Name</TableCell>
              {includeEventId && <TableCell>Event ID</TableCell>}
              {hasRemove && <TableCell align="center">Remove</TableCell>}
              <TableCell align="center">Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {hosts.map((host) => (
              <TableRow key={host.id}>
                <TableCell component="th" scope="row">
                  {host.name}
                </TableCell>
                {includeEventId && (
                  <TableCell>
                    <Link to={`/events/${host.event_id}/edit`}>{host.event_id}</Link>
                  </TableCell>
                )}
                {hasRemove && (
                  <TableCell align="center">
                    <Button color="warning" onClick={() => handleRemoveHost(host.id)}>
                      <RemoveCircle />
                    </Button>
                  </TableCell>
                )}
                <TableCell align="center">
                  <Button component={Link} to={`/hosts/${host.id}/edit`}>
                    <EditIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </>
  );
}

export default HostSummaryList;

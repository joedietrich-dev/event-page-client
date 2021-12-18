import { Button, Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import RemoveCircle from "@mui/icons-material/RemoveCircle";
import { Link } from "react-router-dom";

function HonoreeSummaryList({ honorees, event = { id: 0 }, setData = (f) => f, hasRemove = false, includeEventId = false }) {
  const handleRemoveHonoree = (id) => {
    fetch(`${process.env.REACT_APP_API_ROOT}/events/${event.id}/honorees/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        console.log("ok");
        const newHonorees = honorees.filter((honoree) => honoree.id !== id);
        setData((oldHonorees) => ({ ...oldHonorees, honorees: newHonorees }));
      }
    });
  };

  return (
    <Paper elevation={1}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Honoree Name</TableCell>
            <TableCell>Honor</TableCell>
            {includeEventId && <TableCell>Event ID</TableCell>}
            {hasRemove && <TableCell align="center">Remove</TableCell>}
            <TableCell align="center">Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {honorees.map((honoree) => (
            <TableRow key={honoree.id}>
              <TableCell>{honoree.name}</TableCell>
              <TableCell>{honoree.honor}</TableCell>
              {includeEventId && (
                <TableCell>
                  <Link to={`/events/${honoree.event_id}/edit`}>{honoree.event_id}</Link>
                </TableCell>
              )}
              {hasRemove && (
                <TableCell align="center">
                  <Button color="warning" onClick={() => handleRemoveHonoree(honoree.id)}>
                    <RemoveCircle />
                  </Button>
                </TableCell>
              )}
              <TableCell align="center">
                <Button component={Link} to={`/honorees/${honoree.id}/edit`}>
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

export default HonoreeSummaryList;

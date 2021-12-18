import Check from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import RemoveCircle from "@mui/icons-material/RemoveCircle";
import { Button, Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { Link } from "react-router-dom";

function PanelSummaryList({
  panels = [],
  event = { id: 0 },
  setData = (f) => f,
  hasRemove = false,
  includeEventId = false,
  includeIsModerator = false,
  includeTime = false,
}) {
  const handleRemove = (panelId) => {
    fetch(`${process.env.REACT_APP_API_ROOT}/events/${event.id}/panels/${panelId}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        const newPanels = panels.filter((panel) => panel.id !== panelId);
        setData((oldPanels) => ({ ...oldPanels, panels: newPanels }));
      }
    });
  };
  return (
    <Paper elevation={1}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            {includeTime && <TableCell>Date and Time</TableCell>}
            {includeEventId && <TableCell>Event</TableCell>}
            {includeIsModerator && <TableCell align="center">Moderator</TableCell>}
            {hasRemove && <TableCell align="center">Remove</TableCell>}
            <TableCell align="center">Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {panels.map((panel) => (
            <TableRow key={panel.id}>
              <TableCell>{panel.title}</TableCell>
              {includeTime && <TableCell>{new Date(panel.time).toLocaleString()}</TableCell>}
              {includeEventId && <TableCell>{panel.event}</TableCell>}
              {includeIsModerator && <TableCell align="center">{panel?.is_moderator ? <Check /> : ""}</TableCell>}
              {hasRemove && (
                <TableCell align="center">
                  <Button color="warning" onClick={() => handleRemove(panel.id)}>
                    <RemoveCircle />
                  </Button>
                </TableCell>
              )}
              <TableCell align="center">
                <Button component={Link} to={`/panels/${panel.id}/edit`}>
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

export default PanelSummaryList;

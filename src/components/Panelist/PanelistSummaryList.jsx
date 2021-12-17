import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import Check from "@mui/icons-material/Check";
import RemoveCircle from "@mui/icons-material/RemoveCircle";

function PanelistSummaryList({ panel, panelists, setData = (f) => f }) {
  const handleRemovePanelist = (panelistId) => {
    fetch(`${process.env.REACT_APP_API_ROOT}/panels/${panel.id}/panelists/${panelistId}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        const newPanelists = panelists.filter((panelist) => panelist.id !== panelistId);
        setData((oldPanel) => ({ ...oldPanel, panelists: newPanelists }));
      }
    });
  };
  const handleToggleModerator = (panelistId) => {
    fetch(`${process.env.REACT_APP_API_ROOT}/panels/${panel.id}/panelists/${panelistId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    })
      .then((res) => res.json())
      .then((data) => {
        const newPanelists = panelists.map((panelist) => {
          if (panelist.id === data.id) {
            return { ...panelist, is_moderator: data.is_moderator };
          } else {
            return panelist;
          }
        });
        setData((oldPanel) => ({ ...oldPanel, panelists: newPanelists }));
      });
  };
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Panelist</TableCell>
          <TableCell align="center">Moderator</TableCell>
          <TableCell align="center">Remove</TableCell>
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
            <TableCell align="center" onClick={() => handleToggleModerator(panelist.id)}>
              {panelist?.is_moderator ? <Check /> : ""}
            </TableCell>
            <TableCell align="center">
              <Button color="warning" onClick={() => handleRemovePanelist(panelist.id)}>
                <RemoveCircle />
              </Button>
            </TableCell>
            <TableCell align="center">
              <Button component={Link} to={`/panelists/${panelist.id}/edit`}>
                <EditIcon />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default PanelistSummaryList;

import { Button, Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import RemoveCircle from "@mui/icons-material/RemoveCircle";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function EventSponsorSummaryList({ eventSponsors = [], eventEntity = { id: 0 }, eventSponsorLevels = [], setData = (f) => f, hasRemove = false }) {
  const sortedSponsors = [...eventSponsors].sort((first, second) => {
    if (!first.event_sponsor_level) return 1;
    if (!second.event_sponsor_level) return -1;
    if (first.event_sponsor_level.rank > second.event_sponsor_level.rank) {
      return 1;
    } else if (first.event_sponsor_level.rank < second.event_sponsor_level.rank) {
      return -1;
    } else {
      if (first.sponsor.name > second.sponsor.name) {
        return 1;
      } else if (first.sponsor.name < second.sponsor.name) {
        return -1;
      } else return 0;
    }
  });

  const handleRemove = (eventSponsorId) => {
    fetch(`${process.env.REACT_APP_API_ROOT}/events/${eventEntity.id}/event_sponsors/${eventSponsorId}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        const newSponsors = eventSponsors.filter((eventSponsor) => eventSponsor.id !== eventSponsorId);
        setData((oldSponsors) => ({ ...oldSponsors, event_sponsors: newSponsors }));
      }
    });
  };
  const handleChangeRank = (eventSponsorId, eventSponsorLevelId) => {
    fetch(`${process.env.REACT_APP_API_ROOT}/events/${eventEntity.id}/event_sponsors/${eventSponsorId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ event_sponsor_level_id: eventSponsorLevelId }),
    })
      .then((res) => res.json())
      .then((data) => {
        const newSponsors = eventSponsors.map((eventSponsor) => (eventSponsor.id === eventSponsorId ? data : eventSponsor));
        setData((oldSponsors) => ({ ...oldSponsors, event_sponsors: newSponsors }));
      });
  };

  return (
    <Paper elevation={1}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Level</TableCell>
            <TableCell align="center">Remove</TableCell>
            <TableCell align="center">Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedSponsors.map((eventSponsor) => (
            <TableRow key={eventSponsor.id}>
              <TableCell>{eventSponsor.sponsor.name}</TableCell>
              <TableCell>
                <FormControl fullWidth margin="normal">
                  <Select
                    id="event_sponsor_level"
                    name="event_sponsor_level"
                    value={eventSponsor?.event_sponsor_level?.id || ""}
                    onChange={(event) => handleChangeRank(eventSponsor.id, event.target.value)}
                  >
                    {eventSponsorLevels.map(({ value, label }) => (
                      <MenuItem key={value} value={value}>
                        {label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell align="center">
                <Button color="warning" onClick={() => handleRemove(eventSponsor.id)}>
                  <RemoveCircle />
                </Button>
              </TableCell>
              <TableCell align="center">
                <Button component={Link} to={`/sponsors/${eventSponsor.sponsor.id}/edit`}>
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

export default EventSponsorSummaryList;

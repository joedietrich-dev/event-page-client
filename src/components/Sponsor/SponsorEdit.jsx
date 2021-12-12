import DeleteIcon from "@mui/icons-material/Delete";
import PublishIcon from "@mui/icons-material/Publish";
import { Button, Box, Grid, Paper, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PanelList from "../Panel/PanelList";
import SponsorEvents from "./SponsorEvents";

function SponsorEdit() {
  const [sponsor, setSponsor] = useState({ name: "", logo_src: "", event_sponsors: [], panels: [] });
  const { sponsorId } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_ROOT}/sponsors/${sponsorId}`)
      .then((res) => res.json())
      .then((data) => setSponsor(data))
      .catch(console.log);
  }, [sponsorId]);

  const handleChange = (event) => {
    setSponsor({ ...sponsor, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    fetch(`${process.env.REACT_APP_API_ROOT}/sponsors/${sponsorId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: sponsor.name,
        logo_src: sponsor.logo_src,
      }),
    })
      .then((res) => res.json())
      .then((data) => setSponsor({ ...sponsor, ...data }))
      .catch(console.log);
  };
  const handleDelete = (event) => {
    fetch(`${process.env.REACT_APP_API_ROOT}/sponsors/${sponsorId}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          setSponsor({ name: "", logo_src: "", event_sponsors: [], panels: [] });
          navigate("/sponsors");
        }
      })
      .catch(console.log);
  };

  return (
    <>
      <Typography variant="h3" component="h1">
        Edit Sponsor
      </Typography>
      <Paper elevation={1} sx={{ padding: "1rem" }}>
        <Box component="form">
          <TextField
            id="name"
            name="name"
            label="Sponsor Name"
            variant="outlined"
            value={sponsor.name}
            InputLabelProps={{ shrink: true }}
            onChange={handleChange}
            margin="normal"
            fullWidth
          />
          <TextField
            id="logo_src"
            name="logo_src"
            label="Sponsor Logo"
            variant="outlined"
            value={sponsor.logo_src}
            InputLabelProps={{ shrink: true }}
            onChange={handleChange}
            margin="normal"
            fullWidth
          />
          <Grid container direction="row" justifyContent="space-between">
            <Button variant="contained" margin="normal" startIcon={<PublishIcon />} onClick={handleSubmit}>
              Submit
            </Button>
            <Button variant="outlined" color="warning" margin="normal" startIcon={<DeleteIcon />} onClick={handleDelete}>
              Delete
            </Button>
          </Grid>
        </Box>
      </Paper>
      {sponsor.event_sponsors.length > 0 && (
        <Paper>
          <Box sx={{ padding: "1rem", marginTop: "1rem" }}>
            <Typography variant="h4" component="h2">
              Sponsored Events
            </Typography>
            <SponsorEvents event_sponsors={sponsor.event_sponsors} />
          </Box>
        </Paper>
      )}
      {sponsor.panels.length > 0 && (
        <Paper>
          <Box sx={{ padding: "1rem", marginTop: "1rem" }}>
            <Typography variant="h4" component="h2">
              Sponsored Panels
            </Typography>
            <PanelList panels={sponsor.panels} />
          </Box>
        </Paper>
      )}
    </>
  );
}

export default SponsorEdit;

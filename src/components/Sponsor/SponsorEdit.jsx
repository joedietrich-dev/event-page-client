import { Button, Container, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import PanelList from "../Panel/PanelList";

function SponsorEdit() {
  const [sponsor, setSponsor] = useState({ name: "", logo_src: "", event_sponsors: [], panels: [] });
  const { sponsorId } = useParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_ROOT}/sponsors/${sponsorId}`)
      .then((res) => res.json())
      .then((data) => setSponsor(data))
      .catch(console.log);
  }, [sponsorId]);

  const handleChange = (event) => {
    console.log(event.target.name);
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

  return (
    <Container maxWidth="sm">
      <Paper elevation={1} sx={{ padding: "1rem" }}>
        <Box component="form">
          <Typography variant="h3" component="h1">
            Edit Sponsor
          </Typography>

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
          <Button variant="contained" margin="normal" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </Paper>
      <Paper>
        <Box sx={{ padding: "1rem", marginTop: "1rem" }}>
          <Typography variant="h4" component="h2">
            Sponsored Panels
          </Typography>
          <PanelList panels={sponsor.panels} />
        </Box>
      </Paper>
    </Container>
  );
}

export default SponsorEdit;

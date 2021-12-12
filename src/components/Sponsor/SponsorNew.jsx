import { Typography, Paper, Box, TextField, Grid, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SponsorNew() {
  const [sponsor, setSponsor] = useState({ name: "", logo_src: "", event_sponsors: [], panels: [] });
  let navigate = useNavigate();

  const handleChange = (event) => {
    setSponsor({ ...sponsor, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    fetch(`${process.env.REACT_APP_API_ROOT}/sponsors`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: sponsor.name,
        logo_src: sponsor.logo_src,
      }),
    })
      .then((res) => res.json())
      .then((newSponsor) => navigate(`/sponsors/${newSponsor.id}/edit`))
      .catch(console.log);
  };
  return (
    <>
      <Typography variant="h3" component="h1">
        New Sponsor
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
            <Button variant="contained" margin="normal" startIcon={<AddIcon />} onClick={handleSubmit}>
              Create
            </Button>
          </Grid>
        </Box>
      </Paper>
    </>
  );
}

export default SponsorNew;

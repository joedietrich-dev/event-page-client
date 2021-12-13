import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Publish from "@mui/icons-material/Publish";
import Delete from "@mui/icons-material/Delete";

function FormButtonRow() {
  return (
    <Grid container direction="row" justifyContent="space-between">
      <Button variant="contained" margin="normal" startIcon={<Publish />} onClick={(f) => f}>
        Submit
      </Button>
      <Button variant="outlined" color="warning" margin="normal" startIcon={<Delete />} onClick={(f) => f}>
        Delete
      </Button>
    </Grid>
  );
}

export default FormButtonRow;

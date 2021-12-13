import { Box, Paper, Typography } from "@mui/material";

function EditDataCard({ title, children }) {
  return (
    <Paper>
      <Box sx={{ padding: "1rem", marginTop: "1rem" }}>
        <Typography variant="h4" component="h2">
          {title}
        </Typography>
        {children}
      </Box>
    </Paper>
  );
}

export default EditDataCard;

import { Box, Paper, Typography } from "@mui/material";
import FormButtonRow from "../Common/FormButtonRow";

function FormContainer({ title, children, onSubmit = (f) => f, onDelete = (f) => f }) {
  return (
    <>
      <Typography variant="h3" component="h1">
        {title}
      </Typography>
      <Paper elevation={1} sx={{ padding: "1rem" }}>
        <Box component="form">
          {children}
          <FormButtonRow onSubmit={onSubmit} onDelete={onDelete} />
        </Box>
      </Paper>
    </>
  );
}

export default FormContainer;

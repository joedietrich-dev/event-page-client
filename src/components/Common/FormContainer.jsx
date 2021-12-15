import { Box, Paper } from "@mui/material";
import FormButtonRow from "../Common/FormButtonRow";
import PageHeader from "./PageHeader";

function FormContainer({ title, children, hasDelete = true, onSubmit = (f) => f, onDelete = (f) => f }) {
  return (
    <>
      <PageHeader text={title} />
      <Paper elevation={1} sx={{ padding: "1rem" }}>
        <Box component="form">
          {children}
          <FormButtonRow onSubmit={onSubmit} onDelete={onDelete} hasDelete={hasDelete} />
        </Box>
      </Paper>
    </>
  );
}

export default FormContainer;

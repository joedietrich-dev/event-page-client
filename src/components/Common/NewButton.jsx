import Add from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { useNavigate } from "react-router-dom";

function NewButton({ to, content }) {
  const navigate = useNavigate();
  return (
    <Fab
      sx={{ position: "fixed", bottom: 16, right: 16, zIndex: 10 }}
      variant="extended"
      aria-label="add"
      color="primary"
      onClick={() => navigate(to)}
    >
      <Add sx={{ mr: 1 }}></Add>
      {content}
    </Fab>
  );
}

export default NewButton;

import Add from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function NewButton({ to, content }) {
  return (
    <Link to={to}>
      <Button startIcon={<Add />} variant="contained">
        {content}
      </Button>
    </Link>
  );
}

export default NewButton;

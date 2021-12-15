import { Typography } from "@mui/material";

function PageHeader({ text = "" }) {
  return (
    <Typography variant="h3" component="h1">
      {text}
    </Typography>
  );
}

export default PageHeader;

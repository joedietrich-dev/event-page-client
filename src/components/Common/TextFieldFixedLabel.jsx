import TextField from "@mui/material/TextField";

function TextFieldFixedLabel({ name, label, value, onChange, multiline = false, fullWidth = true }) {
  return (
    <TextField
      id={name}
      name={name}
      label={label}
      value={value}
      onChange={onChange}
      variant="outlined"
      InputLabelProps={{ shrink: true }}
      margin="normal"
      multiline={multiline}
      fullWidth={fullWidth}
    />
  );
}

export default TextFieldFixedLabel;

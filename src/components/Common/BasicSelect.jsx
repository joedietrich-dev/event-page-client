import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({ name, label, options = [{ value: "0", label: "Select" }], value, onChange }) {
  return (
    <FormControl fullWidth margin="normal">
      <InputLabel id={`${name}-label`}>{label}</InputLabel>
      <Select labelId={`${name}-label`} id={name} name={name} value={value} label={label} onChange={onChange}>
        {options.map(({ value, label }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

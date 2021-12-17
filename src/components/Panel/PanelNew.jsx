import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import TextField from "@mui/material/TextField";
import FormContainer from "../Common/FormContainer";
import TextFieldFixedLabel from "../Common/TextFieldFixedLabel";
import BasicSelect from "../Common/BasicSelect";
import useFetch from "../../hooks/useFetch";
import useNewForm from "../../hooks/useNewForm";

const blankPanel = { title: "", description: "", time: Date.now(), panelists: [], event_id: "", sponsors: [] };

function PanelNew() {
  const { data: events } = useFetch(`${process.env.REACT_APP_API_ROOT}/events`, []);
  const { data: panel, handleChange, handleSubmit } = useNewForm(blankPanel, "panels");

  const eventOptions = events.map((event) => ({ value: event.id, label: event.title }));

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <FormContainer title="New Panel" onSubmit={handleSubmit} hasDelete={false}>
        <TextFieldFixedLabel name="title" label="Title" value={panel.title} onChange={handleChange} />
        <DateTimePicker
          renderInput={(props) => <TextField {...props} fullWidth margin="normal" />}
          label="Date and Time"
          id="time"
          name="time"
          value={panel.time}
          onChange={(date) => handleChange({ target: { name: "time", value: date } })}
        />
        <BasicSelect name="event_id" label="Event" options={eventOptions} value={panel.event_id} onChange={handleChange} />
        <TextFieldFixedLabel name="description" label="Description" value={panel.description} onChange={handleChange} multiline />
      </FormContainer>
    </LocalizationProvider>
  );
}

export default PanelNew;

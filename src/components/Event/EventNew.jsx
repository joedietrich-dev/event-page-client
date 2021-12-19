import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import FormContainer from "../Common/FormContainer";
import TextFieldFixedLabel from "../Common/TextFieldFixedLabel";
import TextField from "@mui/material/TextField";
import useNewForm from "../../hooks/useNewForm";

const blankEvent = {
  title: "",
  description: "",
  short_description: "",
  location: "",
  hero_src: "",
  register_link: "",
  view_link: "",
  date: Date.now(),
  hosts: [],
  honorees: [],
  panels: [],
  event_sponsors: [],
};

function EventNew() {
  const { data: eventEntity, handleSubmit, handleChange } = useNewForm(blankEvent, "events", "eventId");

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <FormContainer title="New Event" onSubmit={handleSubmit} hasDelete={false}>
        <TextFieldFixedLabel name="title" label="Title" value={eventEntity.title} onChange={handleChange} />
        <TextFieldFixedLabel name="description" label="Description" value={eventEntity.description} onChange={handleChange} multiline />
        <TextFieldFixedLabel name="short_description" label="Short Description" value={eventEntity.short_description} onChange={handleChange} />
        <TextFieldFixedLabel name="location" label="Location" value={eventEntity.location} onChange={handleChange} />
        <DatePicker
          renderInput={(props) => <TextField {...props} fullWidth margin="normal" />}
          name="date"
          id="date"
          label="Date"
          value={eventEntity.date}
          onChange={(date) => handleChange({ target: { name: "date", value: date } })}
        />
        <TextFieldFixedLabel name="hero_src" label="Hero Image Source" value={eventEntity.hero_src} onChange={handleChange} />
        <TextFieldFixedLabel name="register_link" label="Register Link" value={eventEntity.register_link} onChange={handleChange} />
        <TextFieldFixedLabel name="view_link" label="View Link" value={eventEntity.view_link} onChange={handleChange} />
      </FormContainer>
    </LocalizationProvider>
  );
}

export default EventNew;

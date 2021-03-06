import { TextField } from "@mui/material";
import useEditForm from "../../hooks/useEditForm";
import FormContainer from "../Common/FormContainer";
import TextFieldFixedLabel from "../Common/TextFieldFixedLabel";
import DateTimePicker from "@mui/lab/DateTimePicker";
import EditDataCard from "../Common/EditDataCard";
import PanelistSummaryList from "../Panelist/PanelistSummaryList";
import useFetch from "../../hooks/useFetch";
import BasicSelect from "../Common/BasicSelect";
import SponsorSummaryList from "../Sponsor/SponsorSummaryList";
import LoadingContainer from "../Common/LoadingContainer";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import PanelAddPanelistForm from "./PanelAddPanelistForm";
import PanelAddSponsorForm from "./PanelAddSponsorForm";

const blankPanel = { title: "", description: "", time: Date.now(), panelists: [], event_id: "", sponsors: [] };

function PanelEdit() {
  const { data: events } = useFetch(`${process.env.REACT_APP_API_ROOT}/events`, []);
  const { data: allPanelists } = useFetch(`${process.env.REACT_APP_API_ROOT}/panelists`, []);
  const { data: allSponsors } = useFetch(`${process.env.REACT_APP_API_ROOT}/sponsors`, []);
  const { data: panel, isLoading, handleChange, handleSubmit, handleDelete, setData } = useEditForm(blankPanel, "panels", "panelId");

  const eventOptions = events.map((event) => ({ value: event.id, label: event.title }));
  return (
    <LoadingContainer isLoading={isLoading}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <FormContainer title="Edit Panel" onSubmit={handleSubmit} onDelete={handleDelete}>
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
      <EditDataCard title="Panelists">
        <PanelistSummaryList panelists={panel.panelists} panel={panel} setData={setData} />
        <PanelAddPanelistForm allPanelists={allPanelists} panelPanelists={panel.panelists} panel={panel} setData={setData} />
      </EditDataCard>
      <EditDataCard title="Sponsors">
        <SponsorSummaryList sponsors={panel.sponsors} panel={panel} setData={setData} hasRemove includeLogo />
        <PanelAddSponsorForm allSponsors={allSponsors} panelSponsors={panel.sponsors} panel={panel} setData={setData} />
      </EditDataCard>
    </LoadingContainer>
  );
}

export default PanelEdit;

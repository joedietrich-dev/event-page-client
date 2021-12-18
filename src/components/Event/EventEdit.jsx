import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import useEditForm from "../../hooks/useEditForm";
import FormContainer from "../Common/FormContainer";
import LoadingContainer from "../Common/LoadingContainer";
import TextFieldFixedLabel from "../Common/TextFieldFixedLabel";
import TextField from "@mui/material/TextField";
import EditDataCard from "../Common/EditDataCard";
import HostSummaryList from "../Host/HostSummaryList";
import useFetch from "../../hooks/useFetch";
import EventAddHostForm from "./EventAddHostForm";
import HonoreeSummaryList from "../Honoree/HonoreeSummaryList";
import EventAddHonoreeForm from "./EventAddHonoreeForm";
import PanelSummaryList from "../Panel/PanelSummaryList";
import EventAddPanelForm from "./EventAddPanelForm";
import EventSponsorSummaryList from "./EventSponsorSummaryList";
import EventAddSponsorForm from "./EventAddSponsorForm";

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

function EventEdit() {
  const { data: allHosts } = useFetch(`${process.env.REACT_APP_API_ROOT}/hosts`, []);
  const { data: allHonorees } = useFetch(`${process.env.REACT_APP_API_ROOT}/honorees`, []);
  const { data: allPanels } = useFetch(`${process.env.REACT_APP_API_ROOT}/panels`, []);
  const { data: allSponsors } = useFetch(`${process.env.REACT_APP_API_ROOT}/sponsors`, []);
  const { data: eventSponsorLevels } = useFetch(`${process.env.REACT_APP_API_ROOT}/event_sponsor_levels`, []);
  const { data: eventEntity, isLoading, handleSubmit, handleChange, handleDelete, setData } = useEditForm(blankEvent, "events", "eventId");
  const validHosts = allHosts.filter((host) => host.event_id === null);
  const validHonorees = allHonorees.filter((honoree) => honoree.event_id === null);
  const validPanels = allPanels.filter((panel) => panel.event_id === null);
  const levelOptions = eventSponsorLevels.map((esl) => ({ value: esl.id, label: esl.name }));

  return (
    <LoadingContainer isLoading={isLoading}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <FormContainer title="Edit Event" onSubmit={handleSubmit} onDelete={handleDelete}>
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
      <EditDataCard title="Hosts">
        <HostSummaryList hosts={eventEntity.hosts} event={eventEntity} setData={setData} hasRemove />
        <EventAddHostForm allHosts={validHosts} eventHosts={eventEntity.hosts} eventEntity={eventEntity} setData={setData} />
      </EditDataCard>
      <EditDataCard title="Honorees">
        <HonoreeSummaryList honorees={eventEntity.honorees} event={eventEntity} setData={setData} hasRemove />
        <EventAddHonoreeForm allHonorees={validHonorees} eventHonorees={eventEntity.honorees} eventEntity={eventEntity} setData={setData} />
      </EditDataCard>
      <EditDataCard title="Panels">
        <PanelSummaryList panels={eventEntity.panels} event={eventEntity} setData={setData} includeTime hasRemove />
        <EventAddPanelForm allPanels={validPanels} eventPanels={eventEntity.panels} eventEntity={eventEntity} setData={setData} />
      </EditDataCard>

      <EditDataCard title="Sponsors">
        <EventSponsorSummaryList
          eventSponsors={eventEntity.event_sponsors}
          eventEntity={eventEntity}
          eventSponsorLevels={levelOptions}
          setData={setData}
          hasRemove
        />
        <EventAddSponsorForm
          allSponsors={allSponsors}
          eventSponsors={eventEntity.event_sponsors}
          eventSponsorLevels={levelOptions}
          eventEntity={eventEntity}
          setData={setData}
        />
      </EditDataCard>
    </LoadingContainer>
  );
}

export default EventEdit;

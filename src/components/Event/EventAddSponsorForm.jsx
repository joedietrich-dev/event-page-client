import Box from "@mui/system/Box";
import { useState } from "react";
import BasicSelect from "../Common/BasicSelect";
import FormButtonRow from "../Common/FormButtonRow";

function EventAddSponsorForm({ allSponsors = [], eventSponsors = [], eventSponsorLevels = [], eventEntity, setData = (f) => f }) {
  const sponsorOptions = allSponsors.map((sponsor) => ({ value: sponsor.id, label: sponsor.name }));
  const [sponsorId, setSponsorId] = useState("");
  const [eventSponsorLevelId, setEventSponsorLevelId] = useState("");

  const handleAddSponsor = (event) => {
    fetch(`${process.env.REACT_APP_API_ROOT}/events/${eventEntity.id}/sponsors/${sponsorId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ event_id: eventEntity.id, sponsor_id: sponsorId, event_sponsor_level_id: eventSponsorLevelId }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, eventSponsors);
        const newSponsors = [...eventSponsors, data];
        setSponsorId("");
        setData((oldEvent) => ({ ...oldEvent, event_sponsors: newSponsors }));
      });
  };
  return (
    <Box component="form">
      <BasicSelect
        name="sponsor_id"
        label="Add Sponsor"
        options={sponsorOptions}
        value={sponsorId}
        onChange={(event) => setSponsorId(event.target.value)}
      />
      <BasicSelect
        name="event_sponsor_level_id"
        label="Add Sponsor Level"
        options={eventSponsorLevels}
        value={eventSponsorLevelId}
        onChange={(event) => setEventSponsorLevelId(event.target.value)}
      />
      <FormButtonRow onSubmit={handleAddSponsor} hasDelete={false} />
    </Box>
  );
}

export default EventAddSponsorForm;

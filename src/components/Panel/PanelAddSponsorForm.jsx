import Box from "@mui/system/Box";
import { useState } from "react";
import BasicSelect from "../Common/BasicSelect";
import FormButtonRow from "../Common/FormButtonRow";

function PanelAddSponsorForm({ allSponsors = [], panelSponsors = [], panel, setData = (f) => f }) {
  const sponsorOptions = allSponsors.map((sponsor) => ({ value: sponsor.id, label: sponsor.name }));
  const [sponsorId, setSponsorId] = useState("");

  const handleAddSponsor = (event) => {
    fetch(`${process.env.REACT_APP_API_ROOT}/panels/${panel.id}/sponsors/${sponsorId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ panel_id: panel.id, sponsor_id: sponsorId }),
    })
      .then((res) => res.json())
      .then((data) => {
        const newSponsors = [...panelSponsors, data];
        setSponsorId("");
        setData((oldPanel) => ({ ...oldPanel, sponsors: newSponsors }));
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
      <FormButtonRow onSubmit={handleAddSponsor} hasDelete={false} />
    </Box>
  );
}

export default PanelAddSponsorForm;

import Box from "@mui/system/Box";
import { useState } from "react";
import BasicSelect from "../Common/BasicSelect";
import FormButtonRow from "../Common/FormButtonRow";

function EventAddPanelForm({ allPanels = [], eventPanels = [], eventEntity, setData = (f) => f }) {
  const panelOptions = allPanels.map((panel) => ({ value: panel.id, label: panel.title }));
  const [panelId, setPanelId] = useState("");

  const handleAddPanel = (event) => {
    fetch(`${process.env.REACT_APP_API_ROOT}/events/${eventEntity.id}/panels/${panelId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ event_id: eventEntity.id, panel_id: panelId }),
    })
      .then((res) => res.json())
      .then((data) => {
        const newPanels = [...eventPanels, data];
        setPanelId("");
        setData((oldEvent) => ({ ...oldEvent, panels: newPanels }));
      });
  };
  return (
    <Box component="form">
      <BasicSelect name="panel_id" label="Add Panel" options={panelOptions} value={panelId} onChange={(event) => setPanelId(event.target.value)} />
      <FormButtonRow onSubmit={handleAddPanel} hasDelete={false} />
    </Box>
  );
}

export default EventAddPanelForm;

import Box from "@mui/system/Box";
import { useState } from "react";
import BasicSelect from "../Common/BasicSelect";
import FormButtonRow from "../Common/FormButtonRow";

function PanelAddPanelistForm({ allPanelists = [], panelPanelists = [], panel, setData = (f) => f }) {
  const panelistOptions = allPanelists.map((panelist) => ({ value: panelist.id, label: panelist.name }));
  const [panelistId, setPanelistId] = useState("");

  const handleAddPanelist = (event) => {
    fetch(`${process.env.REACT_APP_API_ROOT}/panels/${panel.id}/panelists/${panelistId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ panel_id: panel.id, panelist_id: panelistId }),
    })
      .then((res) => res.json())
      .then((data) => {
        const newPanelists = [...panelPanelists, data];
        setPanelistId("");
        setData((oldPanel) => ({ ...oldPanel, panelists: newPanelists }));
      });
  };
  return (
    <Box component="form">
      <BasicSelect
        name="panelist_id"
        label="Add Panelist"
        options={panelistOptions}
        value={panelistId}
        onChange={(event) => setPanelistId(event.target.value)}
      />
      <FormButtonRow onSubmit={handleAddPanelist} hasDelete={false} />
    </Box>
  );
}

export default PanelAddPanelistForm;

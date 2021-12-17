import Box from "@mui/system/Box";
import { useState } from "react";
import BasicSelect from "../Common/BasicSelect";
import FormButtonRow from "../Common/FormButtonRow";

function EventAddHostForm({ allHosts = [], eventHosts = [], eventEntity, setData = (f) => f }) {
  const hostOptions = allHosts.map((host) => ({ value: host.id, label: host.name }));
  const [hostId, setHostId] = useState("");

  const handleAddHost = (event) => {
    fetch(`${process.env.REACT_APP_API_ROOT}/events/${eventEntity.id}/hosts/${hostId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ event_id: eventEntity.id, host_id: hostId }),
    })
      .then((res) => res.json())
      .then((data) => {
        const newHosts = [...eventHosts, data];
        setHostId("");
        setData((oldEvent) => ({ ...oldEvent, hosts: newHosts }));
      });
  };
  return (
    <Box component="form">
      <BasicSelect name="host_id" label="Add Host" options={hostOptions} value={hostId} onChange={(event) => setHostId(event.target.value)} />
      <FormButtonRow onSubmit={handleAddHost} hasDelete={false} />
    </Box>
  );
}

export default EventAddHostForm;

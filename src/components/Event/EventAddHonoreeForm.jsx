import Box from "@mui/system/Box";
import { useState } from "react";
import BasicSelect from "../Common/BasicSelect";
import FormButtonRow from "../Common/FormButtonRow";

function EventAddHonoreeForm({ allHonorees = [], eventHonorees = [], eventEntity, setData = (f) => f }) {
  const honoreeOptions = allHonorees.map((honoree) => ({ value: honoree.id, label: honoree.name }));
  const [honoreeId, setHonoreeId] = useState("");

  const handleAddHonoree = (event) => {
    fetch(`${process.env.REACT_APP_API_ROOT}/events/${eventEntity.id}/honorees/${honoreeId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ event_id: eventEntity.id, honoree_id: honoreeId }),
    })
      .then((res) => res.json())
      .then((data) => {
        const newHonorees = [...eventHonorees, data];
        setHonoreeId("");
        setData((oldEvent) => ({ ...oldEvent, honorees: newHonorees }));
      });
  };
  return (
    <Box component="form">
      <BasicSelect
        name="honoree_id"
        label="Add Honoree"
        options={honoreeOptions}
        value={honoreeId}
        onChange={(event) => setHonoreeId(event.target.value)}
      />
      <FormButtonRow onSubmit={handleAddHonoree} hasDelete={false} />
    </Box>
  );
}

export default EventAddHonoreeForm;

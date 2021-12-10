import React from "react";

function HonoreeList({ honorees }) {
  return (
    <ul>
      {honorees.map((honoree) => (
        <li key={honoree.id}>
          {honoree.name} - {honoree.event_id}
        </li>
      ))}
    </ul>
  );
}

export default HonoreeList;

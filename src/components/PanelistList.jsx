function PanelistList({ panelists }) {
  return (
    <ul>
      {panelists.map((panelist) => (
        <li key={panelist.id}>
          {panelist.name} - {panelist.title} - {panelist.company}
        </li>
      ))}
    </ul>
  );
}

export default PanelistList;

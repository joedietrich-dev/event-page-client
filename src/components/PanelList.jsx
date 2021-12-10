function PanelList({ panels }) {
  return (
    <ul>
      {panels.map((panel) => (
        <li key={panel.id}>
          <h3>{panel.title}</h3>
          <p>{panel.time}</p>
          <p>{panel.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default PanelList;

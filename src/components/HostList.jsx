function HostList({ hosts }) {
  return (
    <ul>
      {hosts.map((host) => (
        <li key={host.id}>
          {host.name} - {host.event_id}
        </li>
      ))}
    </ul>
  );
}

export default HostList;

function SponsorList({ sponsors }) {
  return (
    <ul>
      {sponsors.map((sponsor) => (
        <li key={sponsor.id}>
          <img src={sponsor.logo_src} alt={sponsor.name} width="100" />
          {sponsor.name}
        </li>
      ))}
    </ul>
  );
}

export default SponsorList;

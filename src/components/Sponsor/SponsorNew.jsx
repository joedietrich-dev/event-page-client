import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormContainer from "../Common/FormContainer";
import TextFieldFixedLabel from "../Common/TextFieldFixedLabel";

function SponsorNew() {
  const [sponsor, setSponsor] = useState({ name: "", logo_src: "", event_sponsors: [], panels: [] });
  let navigate = useNavigate();

  const handleChange = (event) => {
    setSponsor({ ...sponsor, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    fetch(`${process.env.REACT_APP_API_ROOT}/sponsors`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: sponsor.name,
        logo_src: sponsor.logo_src,
      }),
    })
      .then((res) => res.json())
      .then((newSponsor) => navigate(`/sponsors/${newSponsor.id}/edit`))
      .catch(console.log);
  };
  return (
    <FormContainer title="New Sponsor" hasDelete={false} onSubmit={handleSubmit}>
      <TextFieldFixedLabel name="name" label="Sponsor Name" value={sponsor.name} onChange={handleChange} />
      <TextFieldFixedLabel name="logo_src" label="Sponsor Logo" value={sponsor.logo_src} onChange={handleChange} />
    </FormContainer>
  );
}

export default SponsorNew;

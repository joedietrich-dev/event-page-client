import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormContainer from "../Common/FormContainer";
import TextFieldFixedLabel from "../Common/TextFieldFixedLabel";

const blankHost = { name: "", bio: "", headshot_src: "" };

function HostNew() {
  const [host, setHost] = useState(blankHost);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setHost({ ...host, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    fetch(`${process.env.REACT_APP_API_ROOT}/hosts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: host.name, bio: host.bio, headshot_src: host.headshot_src }),
    })
      .then((res) => res.json())
      .then((newHost) => navigate(`/hosts/${newHost.id}/edit`))
      .catch(console.log);
  };

  return (
    <FormContainer title="New Host" hasDelete={false} onSubmit={handleSubmit}>
      <TextFieldFixedLabel name="name" label="Sponsor Name" value={host.name} onChange={handleChange} />
      <TextFieldFixedLabel name="headshot_src" label="Headshot URL" value={host.headshot_src} onChange={handleChange} />
      <TextFieldFixedLabel name="bio" label="Bio" value={host.bio} onChange={handleChange} multiline={true} />
    </FormContainer>
  );
}

export default HostNew;

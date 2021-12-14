import useNewForm from "../../hooks/useNewForm";
import FormContainer from "../Common/FormContainer";
import TextFieldFixedLabel from "../Common/TextFieldFixedLabel";

const blankHost = { name: "", bio: "", headshot_src: "" };

function HostNew() {
  const { data: host, handleSubmit, handleChange } = useNewForm(blankHost, "hosts");

  return (
    <FormContainer title="New Host" hasDelete={false} onSubmit={handleSubmit}>
      <TextFieldFixedLabel name="name" label="Name" value={host.name} onChange={handleChange} />
      <TextFieldFixedLabel name="headshot_src" label="Headshot URL" value={host.headshot_src} onChange={handleChange} />
      <TextFieldFixedLabel name="bio" label="Bio" value={host.bio} onChange={handleChange} multiline={true} />
    </FormContainer>
  );
}

export default HostNew;

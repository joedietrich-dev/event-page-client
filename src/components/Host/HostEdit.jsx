import TextFieldFixedLabel from "../Common/TextFieldFixedLabel";
import FormContainer from "../Common/FormContainer";
import useEditForm from "../../hooks/useEditForm";

const blankHost = { name: "", bio: "", headshot_src: "" };

function HostEdit() {
  const { data: host, handleSubmit, handleDelete, handleChange } = useEditForm(blankHost, "hosts", "hostId");

  return (
    <FormContainer title="Edit Host" onSubmit={handleSubmit} onDelete={handleDelete}>
      <TextFieldFixedLabel name="name" label="Name" value={host.name} onChange={handleChange} />
      <TextFieldFixedLabel name="headshot_src" label="Headshot URL" value={host.headshot_src} onChange={handleChange} />
      <TextFieldFixedLabel name="bio" label="Bio" value={host.bio} onChange={handleChange} multiline={true} />
    </FormContainer>
  );
}

export default HostEdit;

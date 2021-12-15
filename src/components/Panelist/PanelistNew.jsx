import useNewForm from "../../hooks/useNewForm";
import FormContainer from "../Common/FormContainer";
import TextFieldFixedLabel from "../Common/TextFieldFixedLabel";

const blankPanelist = { name: "", title: "", company: "", bio: "", headshot_src: "" };

function PanelistNew() {
  const { data: panelist, handleSubmit, handleChange } = useNewForm(blankPanelist, "panelists");
  return (
    <FormContainer title="New Panelist" onSubmit={handleSubmit} hasDelete={false}>
      <TextFieldFixedLabel name="name" label="Name" value={panelist.name} onChange={handleChange} />
      <TextFieldFixedLabel name="title" label="Title" value={panelist.title} onChange={handleChange} />
      <TextFieldFixedLabel name="company" label="Company" value={panelist.company} onChange={handleChange} />
      <TextFieldFixedLabel name="headshot_src" label="Headshot URL" value={panelist.headshot_src} onChange={handleChange} />
      <TextFieldFixedLabel name="bio" label="Bio" value={panelist.bio} onChange={handleChange} multiline />
    </FormContainer>
  );
}

export default PanelistNew;

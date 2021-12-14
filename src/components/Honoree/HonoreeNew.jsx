import useNewForm from "../../hooks/useNewForm";
import FormContainer from "../Common/FormContainer";
import TextFieldFixedLabel from "../Common/TextFieldFixedLabel";

const blankHonoree = { name: "", descriptor: "", honor: "", img_src: "", bio: "" };

function HonoreeNew() {
  const { data: honoree, handleSubmit, handleChange } = useNewForm(blankHonoree, "honorees");
  return (
    <FormContainer title="New Honoree" hasDelete={false} onSubmit={handleSubmit}>
      <TextFieldFixedLabel name="name" label="Name" value={honoree.name} onChange={handleChange} />
      <TextFieldFixedLabel name="descriptor" label="Descriptor" value={honoree.descriptor} onChange={handleChange} />
      <TextFieldFixedLabel name="honor" label="Honor" value={honoree.honor} onChange={handleChange} />
      <TextFieldFixedLabel name="img_src" label="Image URL" value={honoree.img_src} onChange={handleChange} />
      <TextFieldFixedLabel name="bio" label="Bio" value={honoree.bio} multiline onChange={handleChange} />
    </FormContainer>
  );
}

export default HonoreeNew;

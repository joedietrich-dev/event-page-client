import useEditForm from "../../hooks/useEditForm";
import FormContainer from "../Common/FormContainer";
import TextFieldFixedLabel from "../Common/TextFieldFixedLabel";

const blankHonoree = { name: "", descriptor: "", honor: "", img_src: "", bio: "" };

function HonoreeEdit() {
  const { data: honoree, handleChange, handleSubmit, handleDelete } = useEditForm(blankHonoree, "honorees", "honoreeId");

  return (
    <FormContainer title="Edit Honoree" onSubmit={handleSubmit} onDelete={handleDelete}>
      <TextFieldFixedLabel name="name" label="Name" value={honoree.name} onChange={handleChange} />
      <TextFieldFixedLabel name="descriptor" label="Descriptor" value={honoree.descriptor} onChange={handleChange} />
      <TextFieldFixedLabel name="honor" label="Honor" value={honoree.honor} onChange={handleChange} />
      <TextFieldFixedLabel name="img_src" label="Image URL" value={honoree.img_src} onChange={handleChange} />
      <TextFieldFixedLabel name="bio" label="Bio" value={honoree.bio} multiline onChange={handleChange} />
    </FormContainer>
  );
}

export default HonoreeEdit;

import useNewForm from "../../hooks/useNewForm";
import FormContainer from "../Common/FormContainer";
import TextFieldFixedLabel from "../Common/TextFieldFixedLabel";

const blankSponsor = { name: "", logo_src: "", event_sponsors: [], panels: [] };
function SponsorNew() {
  const { data: sponsor, handleSubmit, handleChange } = useNewForm(blankSponsor, "sponsors");
  return (
    <FormContainer title="New Sponsor" hasDelete={false} onSubmit={handleSubmit}>
      <TextFieldFixedLabel name="name" label="Sponsor Name" value={sponsor.name} onChange={handleChange} />
      <TextFieldFixedLabel name="logo_src" label="Sponsor Logo" value={sponsor.logo_src} onChange={handleChange} />
    </FormContainer>
  );
}

export default SponsorNew;

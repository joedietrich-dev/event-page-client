import useEditForm from "../../hooks/useEditForm";
import EditDataCard from "../Common/EditDataCard";
import FormContainer from "../Common/FormContainer";
import TextFieldFixedLabel from "../Common/TextFieldFixedLabel";
import PanelList from "../Panel/PanelList";
import SponsorEvents from "./SponsorEvents";

const blankSponsor = { name: "", logo_src: "", event_sponsors: [], panels: [] };

function SponsorEdit() {
  const { data: sponsor, handleSubmit, handleChange, handleDelete } = useEditForm(blankSponsor, "sponsors", "sponsorId");

  return (
    <>
      <FormContainer title="Edit Sponsor" onSubmit={handleSubmit} onDelete={handleDelete}>
        <TextFieldFixedLabel name="name" label="Sponsor Name" value={sponsor.name} onChange={handleChange} />
        <TextFieldFixedLabel name="logo_src" label="Sponsor Logo" value={sponsor.logo_src} onChange={handleChange} />
      </FormContainer>
      {sponsor.event_sponsors.length > 0 && (
        <EditDataCard title="Sponsored Events">
          <SponsorEvents event_sponsors={sponsor.event_sponsors} />
        </EditDataCard>
      )}
      {sponsor.panels.length > 0 && (
        <EditDataCard title="Sponsored Panels">
          <PanelList panels={sponsor.panels} />
        </EditDataCard>
      )}
    </>
  );
}

export default SponsorEdit;

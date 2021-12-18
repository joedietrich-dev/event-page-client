import useEditForm from "../../hooks/useEditForm";
import FormContainer from "../Common/FormContainer";
import EditDataCard from "../Common/EditDataCard";
import TextFieldFixedLabel from "../Common/TextFieldFixedLabel";
import PanelSummaryList from "../Panel/PanelSummaryList";

const blankPanelist = { name: "", title: "", company: "", bio: "", headshot_src: "", panels: [] };

function PanelistEdit() {
  const { data: panelist, handleSubmit, handleDelete, handleChange } = useEditForm(blankPanelist, "panelists", "panelistId");
  return (
    <>
      <FormContainer title="Edit Panelist" onSubmit={handleSubmit} onDelete={handleDelete}>
        <TextFieldFixedLabel name="name" label="Name" value={panelist.name} onChange={handleChange} />
        <TextFieldFixedLabel name="title" label="Title" value={panelist.title} onChange={handleChange} />
        <TextFieldFixedLabel name="company" label="Company" value={panelist.company} onChange={handleChange} />
        <TextFieldFixedLabel name="headshot_src" label="Headshot URL" value={panelist.headshot_src} onChange={handleChange} />
        <TextFieldFixedLabel name="bio" label="Bio" value={panelist.bio} onChange={handleChange} multiline />
      </FormContainer>
      {panelist.panels.length > 0 && (
        <EditDataCard title="Panels">
          <PanelSummaryList panels={panelist.panels} includeIsModerator includeEventId />
        </EditDataCard>
      )}
    </>
  );
}

export default PanelistEdit;

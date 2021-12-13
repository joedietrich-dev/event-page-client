import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import EditDataCard from "../Common/EditDataCard";
import FormContainer from "../Common/FormContainer";
import TextFieldFixedLabel from "../Common/TextFieldFixedLabel";
import PanelList from "../Panel/PanelList";
import SponsorEvents from "./SponsorEvents";

const blankSponsor = { name: "", logo_src: "", event_sponsors: [], panels: [] };

function SponsorEdit() {
  const { sponsorId } = useParams();
  const { data: sponsor, setData: setSponsor } = useFetch(`${process.env.REACT_APP_API_ROOT}/sponsors/${sponsorId}`, blankSponsor);
  let navigate = useNavigate();

  const handleChange = (event) => {
    setSponsor({ ...sponsor, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    fetch(`${process.env.REACT_APP_API_ROOT}/sponsors/${sponsorId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: sponsor.name,
        logo_src: sponsor.logo_src,
      }),
    })
      .then((res) => res.json())
      .then((data) => setSponsor({ ...sponsor, ...data }))
      .catch(console.log);
  };
  const handleDelete = (event) => {
    fetch(`${process.env.REACT_APP_API_ROOT}/sponsors/${sponsorId}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          setSponsor(blankSponsor);
          navigate("/sponsors");
        }
      })
      .catch(console.log);
  };

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

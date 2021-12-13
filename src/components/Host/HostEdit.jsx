import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import TextFieldFixedLabel from "../Common/TextFieldFixedLabel";
import FormContainer from "../Common/FormContainer";

const blankHost = { name: "", bio: "", headshot_src: "" };

function HostEdit() {
  const { hostId } = useParams();
  const { data: host, setData: setHost } = useFetch(`${process.env.REACT_APP_API_ROOT}/hosts/${hostId}`, blankHost);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setHost({ ...host, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    fetch(`${process.env.REACT_APP_API_ROOT}/hosts/${hostId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: host.name, bio: host.bio, headshot_src: host.headshot_src }),
    })
      .then((res) => res.json())
      .then((resJson) => setHost({ ...host, ...resJson }))
      .catch(console.log);
  };
  const handleDelete = (event) => {
    fetch(`${process.env.REACT_APP_API_ROOT}/hosts/${hostId}`, { method: "DELETE" }).then((res) => {
      if (res.ok) {
        setHost(blankHost);
        navigate("/hosts");
      }
    });
  };

  return (
    <FormContainer title="Edit Host" hasDelete={true} onSubmit={handleSubmit} onDelete={handleDelete}>
      <TextFieldFixedLabel name="name" label="Sponsor Name" value={host.name} onChange={handleChange} />
      <TextFieldFixedLabel name="headshot_src" label="Headshot URL" value={host.headshot_src} onChange={handleChange} />
      <TextFieldFixedLabel name="bio" label="Bio" value={host.bio} onChange={handleChange} multiline={true} />
    </FormContainer>
  );
}

export default HostEdit;

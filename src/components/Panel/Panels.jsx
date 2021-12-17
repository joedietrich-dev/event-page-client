import useFetch from "../../hooks/useFetch";
import NewButton from "../Common/NewButton";
import PanelList from "./PanelList";

function Panels() {
  const { data: panels } = useFetch(`${process.env.REACT_APP_API_ROOT}/panels`);
  return (
    <>
      <NewButton to="new" content="New Panel" />
      <PanelList panels={panels} />;
    </>
  );
}

export default Panels;

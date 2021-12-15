import useFetch from "../../hooks/useFetch";
import NewButton from "../Common/NewButton";
import PanelistList from "./PanelistList";

function Panelists() {
  const { data: panelists } = useFetch(`${process.env.REACT_APP_API_ROOT}/panelists`);
  return (
    <>
      <NewButton to="new" content="New Panelist" />
      <PanelistList panelists={panelists} />
    </>
  );
}

export default Panelists;

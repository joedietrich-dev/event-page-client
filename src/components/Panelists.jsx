import { useEffect, useState } from "react";
import PanelistList from "./PanelistList";

function Panelists() {
  const [panelists, setPanelists] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_ROOT}/panelists`)
      .then((res) => res.json())
      .then(setPanelists)
      .catch(console.log);
  }, []);
  return <PanelistList panelists={panelists} />;
}

export default Panelists;

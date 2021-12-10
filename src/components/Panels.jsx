import { useEffect, useState } from "react";
import PanelList from "./PanelList";

function Panels() {
  const [panels, setpanels] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_ROOT}/panels`)
      .then((res) => res.json())
      .then(setpanels)
      .catch(console.log);
  }, []);
  return <PanelList panels={panels} />;
}

export default Panels;

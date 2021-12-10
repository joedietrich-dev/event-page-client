import { useEffect, useState } from "react";
import HonoreeList from "./HonoreeList";

function Honorees() {
  const [honorees, setHonorees] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_ROOT}/honorees`)
      .then((res) => res.json())
      .then(setHonorees)
      .catch(console.log);
  }, []);
  return <HonoreeList honorees={honorees} />;
}

export default Honorees;

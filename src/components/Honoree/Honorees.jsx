import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NewButton from "../Common/NewButton";
import HonoreeList from "./HonoreeList";

function Honorees() {
  const [honorees, setHonorees] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_ROOT}/honorees`)
      .then((res) => res.json())
      .then(setHonorees)
      .catch(console.log);
  }, []);
  return (
    <>
      <NewButton to="new" content="New Honoree" />
      <HonoreeList honorees={honorees} />
    </>
  );
}

export default Honorees;

import HostList from "./HostList";
import useFetch from "../../hooks/useFetch";
import NewButton from "../Common/NewButton";

function Hosts() {
  const { data: hosts } = useFetch(`${process.env.REACT_APP_API_ROOT}/hosts`);

  return (
    <>
      <NewButton to="new" content="New Host" />
      <HostList hosts={hosts} />
    </>
  );
}

export default Hosts;

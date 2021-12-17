import PageHeader from "../Common/PageHeader";
import HostSummaryList from "./HostSummaryList";

function HostList({ hosts }) {
  return (
    <>
      <PageHeader text="View All Hosts" />
      <HostSummaryList hosts={hosts} includeEventId />
    </>
  );
}

export default HostList;

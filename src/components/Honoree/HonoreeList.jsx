import HonoreeSummaryList from "./HonoreeSummaryList";
import PageHeader from "../Common/PageHeader";

function HonoreeList({ honorees }) {
  return (
    <>
      <PageHeader text="View All Honorees" />
      <HonoreeSummaryList honorees={honorees} includeEventId />
    </>
  );
}

export default HonoreeList;

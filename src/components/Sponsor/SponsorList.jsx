import PageHeader from "../Common/PageHeader";
import SponsorSummaryList from "./SponsorSummaryList";

function SponsorList({ sponsors }) {
  return (
    <>
      <PageHeader text="View All Sponsors" />
      <SponsorSummaryList sponsors={sponsors} />
    </>
  );
}

export default SponsorList;

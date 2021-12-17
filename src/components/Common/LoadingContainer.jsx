import { LinearProgress } from "@mui/material";
import PageHeader from "./PageHeader";

const LoadingIndicator = () => (
  <>
    <PageHeader text="Loading..." />
    <LinearProgress />
  </>
);

function LoadingContainer({ isLoading, children }) {
  return <>{isLoading ? <LoadingIndicator /> : children}</>;
}

export default LoadingContainer;

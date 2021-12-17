import Edit from "@mui/icons-material/Edit";
import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { Link } from "react-router-dom";
import { formatDateToTime } from "../../helpers/utils";
import PageHeader from "../Common/PageHeader";

function PanelList({ panels }) {
  return (
    <>
      <PageHeader text="View All Panels" />
      <Paper elevation={1}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Event ID</TableCell>
              <TableCell>Time</TableCell>
              <TableCell align="center">Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {panels.map((panel) => (
              <TableRow key={panel.id}>
                <TableCell>{panel.title}</TableCell>
                <TableCell>
                  <Link to={`/events/${panel.event_id}/edit`}>{panel.event_id}</Link>
                </TableCell>
                <TableCell>{formatDateToTime(panel.time)}</TableCell>
                <TableCell align="center">
                  <Link to={`${panel.id}/edit`}>
                    <Edit />
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </>
  );
}

export default PanelList;

import { Button, Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import PageHeader from "../Common/PageHeader";

function HonoreeList({ honorees }) {
  return (
    <>
      <PageHeader text="View All Honorees" />
      <Paper elevation={1}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Honoree Name</TableCell>
              <TableCell>Honor</TableCell>
              <TableCell>Event ID</TableCell>
              <TableCell align="center">Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {honorees.map((honoree) => (
              <TableRow key={honoree.id}>
                <TableCell>{honoree.name}</TableCell>
                <TableCell>{honoree.honor}</TableCell>
                <TableCell>
                  <Link to={`/events/${honoree.event_id}/edit`}>{honoree.event_id}</Link>
                </TableCell>
                <TableCell align="center">
                  <Link to={`${honoree.id}/edit`}>
                    <Button>
                      <EditIcon />
                    </Button>
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

export default HonoreeList;

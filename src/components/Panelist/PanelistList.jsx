import { Button, Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import PageHeader from "../Common/PageHeader";

function PanelistList({ panelists }) {
  return (
    <>
      <PageHeader text="View All Panelists" />
      <Paper elevation={1}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Company</TableCell>
              <TableCell align="center">Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {panelists.map((panelist) => (
              <TableRow key={panelist.id}>
                <TableCell>{panelist.name}</TableCell>
                <TableCell>{panelist.title}</TableCell>
                <TableCell>{panelist.company}</TableCell>
                <TableCell align="center">
                  <Link to={`${panelist.id}/edit`}>
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

export default PanelistList;

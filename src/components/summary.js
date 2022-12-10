import React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { FileCopy, Print, FileDownload } from "@mui/icons-material";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    editable: true,
    flex: 1,
  },
  {
    field: "lastName",
    headerName: "Last name",
    editable: true,
    flex: 1,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    editable: true,
    flex: 1,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    flex: 1,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const Summary = ({ revert }) => {
  return (
    <Box sx={{ width: "100%" }}>
      <p className="mb-3">
        ** Select correct spelled words (which are shown as spelling errors) and
        add to dictionary.
      </p>
      <div className="flex justify-start items-center mb-3 gap-2">
        <Button variant="outlined" onClick={() => {}}>
          <FileCopy />
        </Button>
        <Button variant="outlined" onClick={() => {}}>
          <Print />
        </Button>
        <Button variant="outlined" onClick={() => {}}>
          <FileDownload /> <span className="ms-1"> Download as Excel</span>
        </Button>
        <Button variant="outlined" onClick={() => {}}>
          <FileDownload /> <span className="ms-1"> Download as PDF</span>
        </Button>
      </div>
      <DataGrid
        rows={rows}
        columns={columns}
        autoHeight
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        components={{ Toolbar: GridToolbar }}
      />
      <div className="flex justify-end items-center mt-4 gap-2">
        <Button variant="contained" onClick={() => {}}>
          Correct Output
        </Button>
        <Button variant="contained" onClick={() => {}}>
          Update Dictonary (Selected words)
        </Button>
        <Button variant="contained" onClick={revert}>
          Revert back
        </Button>
      </div>
    </Box>
  );
};

export default Summary;

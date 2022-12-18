import React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { FileCopy, Print, FileDownload } from "@mui/icons-material";

const columns = [
  { field: "para", headerName: "Para", width: 90 },
  {
    field: "error",
    headerName: "Error",
    flex: 1,
  },
  {
    field: "suggestion",
    headerName: "Suggestion",
    flex: 1,
  },
  {
    field: "errorType",
    headerName: "Error Type",
    type: "number",
    flex: 1,
  },
  {
    field: "category",
    headerName: "Category",
    flex: 1,
  },
];

const rows = [
  {
    id: 1,
    para: "1",
    error: "Sxyz",
    suggestion: "Xyzal/ xyzal/ XYZ",
    errorType: "Spelling mistake (Proper Noun)/ Abbreviation Error",
    category: "Mandatory",
  },
  {
    id: 2,
    para: "2",
    error: "He",
    suggestion: "She",
    errorType: "Abbreviation Used",
    category: "Optional",
  },
  {
    id: 3,
    para: "3",
    error: "Sxyz",
    suggestion: "Xyzal/ xyzal/ XYZ",
    errorType: "Spelling mistake (Proper Noun)/ Abbreviation Error",
    category: "Mandatory",
  },
  {
    id: 4,
    para: "4",
    error: "He",
    suggestion: "She",
    errorType: "Abbreviation Used",
    category: "Optional",
  },
  {
    id: 5,
    para: "5",
    error: "Sxyz",
    suggestion: "Xyzal/ xyzal/ XYZ",
    errorType: "Spelling mistake (Proper Noun)/ Abbreviation Error",
    category: "Mandatory",
  },
  {
    id: 6,
    para: "6",
    error: "He",
    suggestion: "She",
    errorType: "Abbreviation Used",
    category: "Optional",
  },
  {
    id: 7,
    para: "7",
    error: "Sxyz",
    suggestion: "Xyzal/ xyzal/ XYZ",
    errorType: "Spelling mistake (Proper Noun)/ Abbreviation Error",
    category: "Mandatory",
  },
  {
    id: 8,
    para: "8",
    error: "He",
    suggestion: "She",
    errorType: "Abbreviation Used",
    category: "Optional",
  },
  {
    id: 9,
    para: "9",
    error: "Sxyz",
    suggestion: "Xyzal/ xyzal/ XYZ",
    errorType: "Spelling mistake (Proper Noun)/ Abbreviation Error",
    category: "Mandatory",
  },
  {
    id: 10,
    para: "10",
    error: "He",
    suggestion: "She",
    errorType: "Abbreviation Used",
    category: "Optional",
  },
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

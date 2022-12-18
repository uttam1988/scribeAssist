import React, { useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Button, TextField } from "@mui/material";

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

const ErrorHighligtingCorrection = () => {
  const [correctedFieldValue, setCorrectedFieldValue] = useState();
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-white flex flex-col gap-2 w-full shadow-lg p-2">
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
        <div className="w-full flex justify-end items-center px-4 gap-2">
          <Button variant="contained">Correct output</Button>
          <Button variant="contained">Update dict.</Button>
        </div>
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-4 h-full">
        <div className="flex flex-col gap-4">
          <div className="shadow-md bg-white p-2">
            <h2 className="text-xl text-gray-600 border-b pb-2">
              Error Highligted
            </h2>
            <div className="w-full h-16 bg-gray-400"></div>
          </div>
          <div className="shadow-md bg-white p-2 flex flex-col gap-2">
            <h2 className="text-xl text-gray-600 border-b pb-2">
              Cusomized Correction
            </h2>
            <TextField
              onChange={(e) => setCorrectedFieldValue(e.target.value)}
              id="filled-textarea"
              label="Cusomized Correction"
              placeholder="cusomization of corrected output.."
              multiline
              rows={12}
              value={correctedFieldValue}
            />
            <div className="flex justify-center items-center w-full">
              <Button size="large" variant="contained">
                Finalize.
              </Button>
            </div>
          </div>
        </div>
        <div className="shadow-md bg-white p-2 flex flex-col gap-2">
          <h2 className="text-xl text-gray-600 border-b pb-2">
            Final Narrative
          </h2>
          <div className="w-full h-full bg-gray-400"></div>
          <div className="flex justify-center items-center w-full">
            <Button size="large" variant="contained">
              Download doc.
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorHighligtingCorrection;

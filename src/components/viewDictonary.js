import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Button } from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    editable: true,
    flex: 1,
  },
];

const rows = [
  { id: 1, firstName: "Snow" },
  { id: 2, firstName: "Lannister" },
  { id: 3, firstName: "Lannister" },
  { id: 4, firstName: "Stark" },
  { id: 5, firstName: "Targaryen" },
  { id: 6, firstName: "Melisandre" },
  { id: 7, firstName: "Clifford" },
  { id: 8, firstName: "Frances" },
  { id: 9, firstName: "Roxie" },
];
const ViewDictonary = ({ clickRevertBack }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
      <div className="shadow-md bg-white p-2">
        <h2 className="text-lg text-gray-400  border-b pb-2">
          1. Updated Dictionary (Additional)
        </h2>
        <div className="w-full">
          <DataGrid
            rows={rows}
            columns={columns}
            autoHeight
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          />
        </div>
      </div>
      <div className="shadow-md bg-white p-2">
        <h2 className="text-lg text-gray-400 border-b pb-2">
          2. Accepted Abbreviations
        </h2>
        <div className="w-full">
          <DataGrid
            rows={rows}
            columns={columns}
            autoHeight
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          />
        </div>
      </div>
      <div className="shadow-md bg-white p-2">
        <h2 className="text-lg text-gray-400  border-b pb-2">
          3. Sanofi Product List
        </h2>
        <div className="w-full">
          <DataGrid
            rows={rows}
            columns={columns}
            autoHeight
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          />
        </div>
      </div>
      <div className="shadow-md bg-white p-2">
        <h2 className="text-lg text-gray-400  border-b pb-2">
          4. Sanofi Unit Code (R3)
        </h2>
        <div className="w-full">
          <DataGrid
            rows={rows}
            columns={columns}
            autoHeight
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          />
        </div>
      </div>
    </div>
  );
};

export default ViewDictonary;

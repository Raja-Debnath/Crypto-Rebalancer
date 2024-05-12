import { DataGrid } from "@mui/x-data-grid";

import * as React from "react";
// import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

const DataTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/Cyrpto")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("cant get data from backend api | mongodb"), err;
      });
  }, []);
  const rows = [
    { id: 1, col1: "Bitcoin", col2: "63000" },
    { id: 2, col1: "Ethereum", col2: "2200" },
    { id: 3, col1: "Chainlink", col2: "is Amazing" },
    { id: 4, col1: "Polkadot", col2: "is Amazing" },
    { id: 5, col1: "Solana", col2: "is Amazing" },
    { id: 6, col1: "Tether", col2: "is Amazing" },
  ];

  const columns = [
    { field: "col1", headerName: "Name", width: 150 },
    { field: "col2", headerName: "Current_Price", width: 150 },
    { field: "col3", headerName: "24_Change", width: 150 },
    { field: "col4", headerName: "Quantity ", width: 150 },
    { field: "col5", headerName: "Market_Cap", width: 150 },
  ];

  return (
    <div style={{ height: 600, width: "150%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        sx={{
          boxShadow: 2,
          border: 2,
          borderColor: "primary.light",
          "& .MuiDataGrid-cell:hover": {
            color: "primary.main",
          },
        }}
      />
      ;
    </div>
  );
};

export default DataTable;

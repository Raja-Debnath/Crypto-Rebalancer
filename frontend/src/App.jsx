//import { useState } from 'react'
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

// components
import  LandinngPageOne from "./setup/home"
import Table from "./setup/tabel";
import DataTable from "./setup/dataGrid";
import Dashboard from "./setup/dashboard";

function App() {
  

  return (
    <>
      
      <Router>
        <Routes>
          <Route path="/" element={<LandinngPageOne />} />
          <Route path="/tabel" element={<Table />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/DataGrid" element={<DataTable />} />
        


        </Routes>
      </Router>
    </>
  );
}

export default App;

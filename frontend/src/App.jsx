//import { useState } from 'react'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  LandinngPageOne from "./setup/home"
import Table from "./setup/tabel";

function App() {
  

  return (
    <>
      
      <Router>
        <Routes>
          <Route path="/" element={<LandinngPageOne />} />
          <Route path="/tabel" element={<Table />} />
        


        </Routes>
      </Router>
    </>
  );
}

export default App;

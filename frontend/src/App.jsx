import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// components
import LandinngPageOne from "./setup/home";
import Table from "./setup/tabel";
import Dashboard from "./setup/dashboard";
import Rebalance from "./pages/rebalance";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandinngPageOne />} />
          <Route path="/tabel" element={<Table />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/rebalance" element={<Rebalance />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

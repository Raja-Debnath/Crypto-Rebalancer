
import CardOne from '../components/card';
import Navbar from '../components/navbar'
// import DasTable from '../components/xd';
import DasTable from '../components/Portfolio'
import LiveTabel from '../components/LiveTabel';
function Dashboard() {
  return (
    <>
      <Navbar/>
      {/* <CardOne/> */}
      <LiveTabel/>
      <DasTable/>
      </>
  );
}

export default Dashboard;
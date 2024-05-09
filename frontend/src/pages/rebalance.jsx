import React, { useState, useEffect } from "react";
import axios from "axios";
function Rebalance({}) {
    const [data, setData] = useState([]);
  const [liveData, setLiveData] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await axios.get("http://localhost:5000/api/Crypto");
      setData(res.data);
    }
    getData();
    // axios
    //   .get("http://localhost:5000/api/Crypto")
    //   .then((res) => {
    //     setData(res.data);
    //   })
    //   .catch((err) => {
    //     console.log("cant get data from backend api | mongodb"), err;
    //   });
  }, []);
  useEffect(() => {
    async function getLiveData() {
      const res = await axios.get("http://localhost:5000/api/prices");
      setLiveData(res.data);
    }   
    getLiveData();
    // axios
    //   .get("http://localhost:5000/api/prices")
    //   .then((res) => { 
    //     setLiveData(res.data);
    //   })
    //   .catch((err) => {
    //     console.log("cant get data from backend api | coingecko"), err;
    //   });
  }, []);
  console.log(liveData.bitcoin.current_price);
    
    async function calculatePercentageChange(a, b) {  
        let val;
        // if(a > b){
        //   val = ((a - b) / b) * 100;
        // } else {
          val = ((b - a) / a) * 100;
        // }
        
        return await val.toFixed(2);
      }
      
      
      const btcPercentageChange = calculatePercentageChange(liveData.bitcoin.current_price, data[0].current_price);
      const chainlinkPercentageChange = calculatePercentageChange(liveData.chainlink.current_price, data[1].current_price);
      const ethPercentageChange = calculatePercentageChange(liveData.ethereum.current_price, data[2].current_price);
      const polPercentageChange = calculatePercentageChange(liveData.polkadot.current_price, data[3].current_price);
      const solPercentageChange = calculatePercentageChange(liveData.solana.current_price, data[4].current_price);
      const tetPercentageChange = calculatePercentageChange(liveData.tether.current_price, data[5].current_price);
  return (
    <>
    <table className="w-full text-left text-sm text-gray-700 divide-y divide-gray-200">
    
        <tbody>
          <tr>
            <td> Bitcoin Percentage Change : {calculatePercentageChange(liveData.bitcoin.current_price, data[0].current_price)}</td>
            <td> Chainlink Percentage Change : {calculatePercentageChange(liveData.chainlink.current_price, data[1].current_price)}</td>
            <td> Ethereum Percentage Change : {calculatePercentageChange(liveData.ethereum.current_price, data[2].current_price)}</td>
            <td> Polkadot Percentage Change : {calculatePercentageChange(liveData.polkadot.current_price, data[3].current_price)}</td>
            <td> Solana Percentage Change : {calculatePercentageChange(liveData.solana.current_price, data[4].current_price)}</td>
            <td> Tether Percentage Change : {calculatePercentageChange(liveData.tether.current_price, data[5].current_price)}</td>
            {/* <td> Chainlink Percentage Change : {chainlinkPercentageChange}</td>
            <td> Ethereum Percentage Change : {ethPercentageChange}</td>
            <td> Polkadot Percentage Change : {polPercentageChange}</td>
            <td> Solana Percentage Change : {solPercentageChange}</td>
            <td> Tether Percentage Change : {tetPercentageChange}</td>*/}
          </tr> 
        </tbody>
    </table>
      
    </>
  );
}
export default Rebalance;
import React, { useState, useEffect } from "react";
import axios from "axios";
// import Button from "@mui/material/Button";
import ButtonUsage from "./test";
import Navbar from "../components/navbar";
import FooterThree from "../components/Footer";
function Table({}) {
  const [data, setData] = useState([]);
  const [liveData, setLiveData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/Crypto")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("cant get data from backend api | mongodb"), err;
      });
    axios
      .get("http://localhost:5000/api/prices")
      .then((res) => {
        setLiveData(res.data);
      })
      .catch((err) => {
        console.log("cant get data from backend api | coingecko"), err;
      });
  }, []);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/api/prices")
  //     .then((res) => {
  //       setLiveData(res.data);
  //     })
  //     .catch((err) => {
  //       console.log("cant get data from backend api | coingecko"), err;
  //     });
  // }, []);

  function roundToNearestMillion(num) {
    return Math.round(num / 1e6); // Divide by 1e6 and round to nearest million
  }

  function calculatePercentageChange(a, b) {
    let val;
    // if(a > b){
    //   val = ((a - b) / b) * 100;
    // } else {
    val = ((b - a) / a) * 100;
    // }

    return val.toFixed(2);
  }
console.log(calculatePercentageChange(
  liveData?.bitcoin?.current_price,
  data[0]?.current_price))
  // console.log(liveData);
  // const btcPercentageChange = calculatePercentageChange(liveData.bitcoin.current_price, data[0].current_price);
  // const chainlinkPercentageChange = calculatePercentageChange(liveData.chainlink.current_price, data[1].current_price);
  // const ethPercentageChange = calculatePercentageChange(liveData.ethereum.current_price, data[2].current_price);
  // const polPercentageChange = calculatePercentageChange(liveData.polkadot.current_price, data[3].current_price);
  // const solPercentageChange = calculatePercentageChange(liveData.solana.current_price, data[4].current_price);
  // const tetPercentageChange = calculatePercentageChange(liveData.tether.current_price, data[5].current_price);

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <center>
        <b>
          <h2>Your Cryptos</h2>
        </b>
      </center>
      <table
        className="w-full text-left text-sm text-gray-700 divide-y divide-gray-200"
        style={{ width: "80%", margin: "0px auto" }}
      >
        <thead className="bg-gray-50">
          <tr>
            <th>Name</th>
            <th>current_price</th>
            <th>market_cap</th>
          </tr>
        </thead>

        <tbody>
          {Array.isArray(data) &&
            data.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.current_price}</td>
                <td>{item.market_cap}</td>
              </tr>
            ))}
        </tbody>
        <thead>
          <tr>
            <th>movement</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {" "}
              Bitcoin Percentage Change :{" "}
              {calculatePercentageChange(
                liveData?.bitcoin?.current_price,
                data[0]?.current_price
              )}
            </td>
            <td>
              {" "}
              Chainlink Percentage Change :{" "}
              {calculatePercentageChange(
                liveData?.chainlink?.current_price,
                data[1]?.current_price
              )}
            </td>
            <td>
              {" "}
              Ethereum Percentage Change :{" "}
              {calculatePercentageChange(
                liveData?.ethereum?.current_price,
                data[2]?.current_price
              )}
            </td>
            <td>
              {" "}
              Polkadot Percentage Change :{" "}
              {calculatePercentageChange(
                liveData?.polkadot?.current_price,
                data[3]?.current_price
              )}
            </td>
            <td>
              {" "}
              Solana Percentage Change :{" "}
              {calculatePercentageChange(
                liveData?.solana?.current_price,
                data[4]?.current_price
              )}
            </td>
            <td>
              {" "}
              Tether Percentage Change :{" "}
              {calculatePercentageChange(
                liveData?.tether?.current_price,
                data[5]?.current_price
              )}
            </td>
          </tr>
        </tbody>
      </table>

      <br />
      <br />
      <br />
      <br />
      <center>
        <b>
          <h2>Live Cryptos</h2>
        </b>
      </center>

      <table
        className="w-full text-left text-sm text-gray-700 divide-y divide-gray-200 "
        style={{ width: "80%", margin: "0px auto" }}
      >
        <thead className="bg-gray-50">
          <tr>
            <th>Name</th>
            <th>current_price</th>
            <th>market_cap( Millions)</th>
            <th>price_change_percentage_24h</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(liveData).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{value.current_price}</td>
              <td>{roundToNearestMillion(value.market_cap)}</td>
              <td>{value.price_change_percentage_24h.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />
      <br />
      <ButtonUsage />
      <FooterThree />
    </>
  );
}

export default Table;

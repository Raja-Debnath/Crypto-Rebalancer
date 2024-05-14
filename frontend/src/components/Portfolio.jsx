import React, { useState, useEffect } from "react";
import axios from "axios";
function DasTable({}) {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/prices")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("cant get data from backend api | coingecko"), err;
      });
  }, []);
  // console.log(data.bitcoin.market_cap );
  // function numberWithCommas(x) {
  //   // Function to format numbers with commas (same as previous explanation)
  //   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // }
  function roundToNearestMillion(num) {
    return Math.round(num / 1e6); // Divide by 1e6 and round to nearest million
  }
  // console.log(numberWithCommas(data.bitcoin.market_cap / 1e6 + "M"));
  // console.log(roundToNearestMillion(data.bitcoin.market_cap / 1e6));

  // console.log( data.bitcoin.current_price);

  // for (let i in data) {
  //   // console.log(data.bitcoin.current_price);
  //   // console.log(data[i].current_price);
  //   // console.log(data[i].market_cap);
  // }
  return (
    <>
      <table
        className="w-full text-left text-sm text-gray-700 divide-y divide-gray-200"
        style={{ width: "80%", margin: "40px auto" }}
      >
        <thead className="bg-gray-50">
          <tr>
            <th>Name</th>
            <th>current_price</th>
            <th>market_cap ( Millions)</th>
            <th>price_change_percentage_24h</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(data).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{value.current_price}</td>
              <td>{roundToNearestMillion(value.market_cap)}</td>
              <td>{value.price_change_percentage_24h.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default DasTable;

{
  /* adddata to useEffect for static data for database */
}
{
  /*
  axios
      .get("http://localhost:5000/api/Crypto")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("cant get data from backend api | mongodb"), err;
      });
  }, []);
*/
}

{
  /* add data to tbody 

  <tbody>
  {data.map((item) => (
    <tr key={item.id}> 
      <td>{item.name}</td>
      <td>{item.current_price}</td>
      <td>{item.market_cap}</td>
    </tr>
  ))}
</tbody>
*/
}

{
  /* {data.map((data) => (
            console.log(data),
            <tr key={data.id}>
              {/* <td>{data[1]}</td> */
}
{
  /* {/* <td>{data.current_price}</td> */
}
{
  /* <td>{data.market_cap}</td> 
            </tr>
          ))} */
}
{
  /* <tr key={i}>
            <td>{data[i].name}</td>
            <td>{data[i].current_price}</td>
            <td>{data[i].market_cap}</td>
          </tr> */
}

// working code
{
  /* <tr>
            <td>Bitcoin</td>
            <td>{data.bitcoin.current_price}</td>
            <td>{roundToNearestMillion(data.bitcoin.market_cap )}</td>
            <td>{data.bitcoin.price_change_percentage_24h}</td>
          </tr>
          <tr>
            <td>chainlink</td>
            <td>{data.chainlink.current_price}</td>
            <td>{roundToNearestMillion(data.chainlink.market_cap  )}</td>
            <td>{data.chainlink.price_change_percentage_24h}</td>
          </tr>
          <tr>
            <td>ethereum</td>
            <td>{data.ethereum.current_price}</td>
            <td>{roundToNearestMillion(data.ethereum.market_cap  )}</td>
            <td>{data.ethereum.price_change_percentage_24h}</td>
          </tr>
          <tr>
            <td>polkadot</td>
            <td>{data.polkadot.current_price}</td>
            <td>{roundToNearestMillion(data.polkadot.market_cap  )}</td>
            <td>{data.polkadot.price_change_percentage_24h}</td>
          </tr>
          <tr>
            <td>solana</td>
            <td>{data.solana.current_price}</td>
            <td>{roundToNearestMillion(data.solana.market_cap  )}</td>
            <td>{data.solana.price_change_percentage_24h}</td>
          </tr>
          <tr>
            <td>tether</td>
            <td>{data.tether.current_price}</td>
            <td>{roundToNearestMillion(data.tether.market_cap  )}</td>
            <td>{data.tether.price_change_percentage_24h}</td>
          </tr> */
}

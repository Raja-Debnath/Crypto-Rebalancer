import React, { useState, useEffect } from "react";
import axios from "axios";

function DasTable({}) {
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

  return (
    <>
     <table className="w-full text-left text-sm text-gray-700 divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th>Name</th>
            <th>current_price</th>
            <th>market_cap</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data) => (
            <tr>
              <td>{data.name}</td>
              <td>{data.current_price}</td>
              <td>{data.market_cap}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </>
  );
}

export default DasTable;